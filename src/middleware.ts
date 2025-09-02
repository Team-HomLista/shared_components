import acceptLanguage from "accept-language";
import { NextRequest, NextResponse } from "next/server";

import { FALLBACK_LNG, LANGUAGUES, COOKIE_NAME, HEADER_NAME } from "@/config/i18n";
import { getCookie, setCookie } from "@/lib/cookie";
import { getAccessToken } from "@/services/access-token";

acceptLanguage.languages([...LANGUAGUES]);

export const config = {
  // Avoid matching for static files, API routes, etc.
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)"]
};

const authRoutesRequired = [
  "/dashboard",
  "/dashboard/(.*)",
  "/profile",
  "/profile/(.*)",
  "/settings",
  "/settings/(.*)"
];

const notAuthRoutesRequired = ["/login", "/register"];

export async function middleware(req: NextRequest) {
  if (req.headers.get("accept") === "text/x-component") return NextResponse.next();

  const lng = await getLanguage(req);
  req.headers.set(HEADER_NAME, lng);
  await setCookie(COOKIE_NAME, lng);

  if (!(await validNotAuthRoutes(req))) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (!(await validAuthRoutes(req))) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

async function getLanguage(req: NextRequest) {
  const languageFromCookie = await getCookie(COOKIE_NAME);

  if (languageFromCookie) return languageFromCookie;

  const languageFromHeader = acceptLanguage.get(req.headers.get("Accept-Language"));

  if (languageFromHeader) return languageFromHeader;

  return FALLBACK_LNG;
}

async function validAuthRoutes(req: NextRequest) {
  const isAuthRoute = authRoutesRequired.some((route) => req.nextUrl.pathname.startsWith(route));

  if (isAuthRoute) {
    const accessToken = await getAccessToken();

    return !!accessToken;
  }

  return true;
}

async function validNotAuthRoutes(req: NextRequest) {
  const isNotAuthRoute = notAuthRoutesRequired.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  if (isNotAuthRoute) {
    const accessToken = await getAccessToken();

    return !accessToken;
  }

  return true;
}
