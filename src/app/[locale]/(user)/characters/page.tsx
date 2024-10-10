import React, { Suspense } from 'react'
import Characters from '@/views/Characters/Characters'
import { axiosClient } from '@/shared/api/axiosClient';
import { LoadingSkeleton } from '@/components';
import { getI18n } from '../../../../../locales/server';
import { getCharacters } from '@/utils/getCharacters';

type SearchParams = {
	searchParams: {
		page: string;
	},
	params: {
		locale: string
	}
}

export async function generateMetadata({ params }: { params: { locale: string } }) {
	const t = await getI18n()
	return {
		title: `${t('seo.characters.metaTitle')}`,
		description: `${t('seo.characters.metaDescription')}`
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
				currentPage={page || 1}
			/>
		</Suspense>
	)
}

export default CharactersPage
