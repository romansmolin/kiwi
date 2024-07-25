import React, { Suspense } from 'react'
import Characters from '@/views/Characters/Characters'
import { axiosClient } from '@/shared/api/axiosClient';
import { Header, LoadingSkeleton } from '@/components';
import useTranslation from 'next-translate/useTranslation';
import { getI18n } from '../../../../locales/server';
import { Divide } from 'lucide-react';


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

export async function generateMetadata({ params }: { params: { locale: string } }) {
	const t = await getI18n()
	return {
		title: `${t('seo.characters.metaTitle')}`,
		description: `${t('seo.characters.metaDescription')}`
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
			<Suspense fallback={<LoadingSkeleton />}>
				<Characters
					characters={characters.results}
					totalPages={totalPages}
					currentPage={page}
				/>
			</Suspense>
	)
}

export default CharactersPage
