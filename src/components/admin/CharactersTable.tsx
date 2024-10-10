"use client"

import React, { useCallback, useEffect, useState } from 'react'
import { ColumnDef } from "@tanstack/react-table"

import { DataTable } from '../DataTable'
import { Button } from '../ui/button'
import { getCharacters } from '@/utils/getCharacters'
import { useCurrentLocale } from '../../../locales/client'
import { axiosClient } from '@/shared/api/axiosClient'
import { Toggle } from '../ui/toggle'

type Character = {
    id: string
    name: string;
    image: string;
    description: string;
    availableInUK: boolean
}

const CharactersTable = () => {
    const [page, setPage] = useState(1)
    const [charactersList, setCharactersList] = useState<Character[]>([]);
    const [isLoading, setIsLoading] = useState(false)
    const [totalPages, setTotalPages] = useState(0);
    const locale = useCurrentLocale()

    const columns: ColumnDef<Character>[] = [
        {
            accessorKey: "name",
            header: "Name",
        },
        {
            accessorKey: "description",
            header: "Description",
        },
        {
            id: "availability",
            cell: ({ row }) => {
                const character = row.original

                return (
                    <Toggle
                        variant="outline"
                        aria-label="Toggle UK availability"
                        pressed={character.availableInUK}
                        onPressedChange={() => changeUkAvailability(character.id)}
                    >
                        {character.availableInUK ? 'Available' : 'Not Available'}
                    </Toggle>
                )
            },
        },
        {
            id: "delete",
            cell: ({ row }) => {
                const character = row.original

                return (
                    <Button className='bg-primary-600' onClick={() => deleteCharacter(character.id)}>Delete</Button>
                )
            },
        },
    ]

    const fetchCharacters = useCallback(async () => {
        setIsLoading(true);
        try {
            const { characters, totalPages } = await getCharacters(page, 10, locale);
            console.log('characters: ', characters);
            if (characters.results) {
                setCharactersList(characters.results);
            }
            setTotalPages(totalPages);
        } catch (error) {
            console.error('Error fetching characters:', error);
        } finally {
            setIsLoading(false);
        }
    }, [locale, page]);

    useEffect(() => {
        fetchCharacters();
    }, [fetchCharacters]);

    const handlePagination = useCallback((page: number) => {
        setPage(page);
    }, []);

    const deleteCharacter = async (id: string) => {
        setIsLoading(true);
        try {
            await axiosClient.delete(`/characters/character/${id}`);
            await fetchCharacters(); // Fetch updated list after deletion
        } catch (error) {
            console.error('Failed to delete character:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const changeUkAvailability = async (id: string) => {
        setIsLoading(true);
        try {
            await axiosClient.patch(`/characters/character/${id}/available-in-uk`);
            await fetchCharacters(); // Fetch updated list after updating availability
        } catch (error) {
            console.error('Failed to update character availability:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <DataTable
            columns={columns}
            data={charactersList}
            handlePagination={handlePagination}
            currentPage={page}
            totalPages={totalPages}
            isLoading={isLoading}
        />
    );
};

export default CharactersTable;
