import Home from "@/views/Home/Home";
import { getI18n } from "../../../locales/server";
import { Suspense } from "react";
import { LoadingSkeleton } from "@/components";

export async function generateMetadata({ params }: { params: { locale: string } }) {
	const t = await getI18n()
	return {
		title: `${t('seo.home.metaTitle')}`,
		description: `${t('seo.home.metaDescription')}`
	}
}

export default function HomePage() {
	return (
		<Suspense fallback={<LoadingSkeleton />}>
			<Home />		
		</Suspense>
	)
}
