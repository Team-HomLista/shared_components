import acceptLanguage from "accept-language";
import { NextRequest, NextResponse } from "next/server";

import { fallbackLng, languages, cookieName, headerName } from "@/lib/i18n/settings";

import { getCookie, setCookie } from "./lib/cookie";
import { getAccessToken } from "./services/access-token";

acceptLanguage.languages(languages);

export const config = {
  // Avoid matching for static files, API routes, etc.
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)"]
};

const requiredAuth = [
  "/dashboard",
  "/dashboard/(.*)",
  "/profile",
  "/profile/(.*)",
  "/settings",
  "/settings/(.*)"
];

export async function middleware(req: NextRequest) {
  if (req.headers.get("accept") === "text/x-component") return NextResponse.next();

  const lng = await getLanguage(req);
  req.headers.set(headerName, lng);
  await setCookie(cookieName, lng);

  if (!(await validAuthRoutes(req))) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

async function getLanguage(req: NextRequest) {
  const languageFromCookie = await getCookie(cookieName);

  if (languageFromCookie) return languageFromCookie;

  const languageFromHeader = acceptLanguage.get(req.headers.get("Accept-Language"));

  if (languageFromHeader) return languageFromHeader;

  return fallbackLng;
}

async function validAuthRoutes(req: NextRequest) {
  const isAuthRoute = requiredAuth.some((route) => req.nextUrl.pathname.startsWith(route));

  if (isAuthRoute) {
    const accessToken = await getAccessToken();

    return !!accessToken;
  }

  return true;
}
