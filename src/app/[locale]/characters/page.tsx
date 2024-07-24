import React from 'react'
import Characters from '@/views/Characters/Characters'
import { axiosClient } from '@/shared/api/axiosClient';
import { Header } from '@/components';
import useTranslation from 'next-translate/useTranslation';


type Character = {
	name: string;
	image: string;
	description: string;
}

type SearchParams = {
	searchParams: {
		page: string;
	},
	params: {
		locale: string
	}
}
interface CharacterResponse {
	total: number;
	totalPages: number;
	characters: {
		results: Character[];
	}
}

const getCharacters = async (page: number, limit: number, lang: string): Promise<CharacterResponse> => {
	try {
		const response = await axiosClient.get<CharacterResponse>('/characters/all-characters', {
			params: { page, limit, lang }
		});
		return response.data;
	} catch (error) {
		console.error('Error fetching characters:', error);
		throw error;
	}
}

const CharactersPage: React.FC<SearchParams> = async ({ searchParams, params }) => {
	const { page } = searchParams
	const { locale } = params
	const { characters, totalPages } = await getCharacters(parseInt(page), 6, locale);
	
	return (
		<Characters
			characters={characters.results}
			totalPages={totalPages}
		/>
	)
}

export default CharactersPage
