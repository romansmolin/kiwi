import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest } from "next/server";

const I18nMiddleware = createI18nMiddleware({
  locales: ["ru", "lv", "en"],
  defaultLocale: "en",
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: [
    '/',
    '/(ru|lv|en)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)'
  ]};
