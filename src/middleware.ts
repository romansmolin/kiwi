import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest, NextResponse } from "next/server";

const I18nMiddleware = createI18nMiddleware({
    locales: ["ru", "lv", "en"],
    defaultLocale: "en",
});

export function middleware(request: NextRequest) {
    const token = request.cookies.get("authToken")?.value || "";
    const locale = request.cookies.get("Next-Locale")?.value || "en";

    const { pathname } = request.nextUrl;

    if (!token && pathname === `/${locale}/admin/dashboard`) {
        return NextResponse.redirect(new URL(`/${locale}/admin`, request.url));
    }

    request.headers.set("cookie", token);

    return I18nMiddleware(request);
}

export const config = {
    matcher: ["/", "/(ru|lv|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
