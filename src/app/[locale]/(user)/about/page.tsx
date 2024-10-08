import About from "@/views/About/About";
import { getI18n } from "../../../../../locales/server";
import { Suspense } from "react";
import { LoadingSkeleton } from "@/components";

export async function generateMetadata({ params }: { params: { locale: string } }) {
	const t = await getI18n()
	return {
		title: `${t('seo.about.metaTitle')}`,
		description: `${t('seo.about.metaDescription')}`
	}
}

export default function AboutUs() {
	return (
		<Suspense fallback={<LoadingSkeleton />}>
			<About />
		</Suspense>
	)
}
