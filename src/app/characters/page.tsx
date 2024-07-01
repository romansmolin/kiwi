import React from 'react'
import Characters from '@/pages/Characters/Characters'
import { axiosClient } from '@/shared/api/axiosClient';
import { Header } from '@/components';

type Character = {
	name: string;
	image: string;
	description: string;
}

type SearchParams = {
	searchParams: {
		page: string;
	};
}
interface CharacterResponse {
	total: number;
	totalPages: number;
	characters: {
		results: Character[];
	}
}

const getCharacters = async (page: number, limit: number): Promise<CharacterResponse> => {
	try {
		const response = await axiosClient.get<CharacterResponse>('/characters/all-characters', {
			params: { page, limit }
		});
		return response.data;
	} catch (error) {
		console.error('Error fetching characters:', error);
		throw error;
	}
}

const CharactersPage: React.FC<SearchParams> = async ({ searchParams }) => {
	const { page } = searchParams
	const { characters, totalPages } = await getCharacters(parseInt(page), 6);

	return (
		<>
			<Header />
			<Characters
				characters={characters.results}
				totalPages={totalPages}
			/>
		</>
	)
}

export default CharactersPage
