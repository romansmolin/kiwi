import About from "@/views/About/About";
import { getI18n } from "../../../../locales/server";

export async function generateMetadata({ params }: { params: { locale: string } }) {
	const t = await getI18n()
	return {
		title: `${t('seo.about.metaTitle')}`,
		description: `${t('seo.about.metaDescription')}`
	}
}

export default function AboutUs() {
  return <About />
}
