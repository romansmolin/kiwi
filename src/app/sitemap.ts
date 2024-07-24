export default async function sitemap() {
    const URL = process.env.CLIENT_URL;

    const locales: string[] = ["lv", "ru", "en"];

    const baseRoutes = ["", "/about", "/characters"];

    const generateRoutes = (locales: string[], routes: string[]): string[] => {
        const allRoutes: string[] = [];
        locales.forEach(locale => {
            routes.forEach(route => {
                allRoutes.push(`${locale}${route}`);
            });
        });
        return allRoutes;
    };

    const allRoutes = generateRoutes(locales, baseRoutes);

    const routes = allRoutes.map((route) => ({
        url: `${URL}${route}`,
        lastModified: new Date().toISOString(),
    }));

    return routes;
}
