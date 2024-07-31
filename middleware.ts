import { NextRequest, NextResponse } from "next/server";
import { i18n } from "./i18n-config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const PATH_PREFIX = process.env.PATH_PREFIX || "/";

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore - locales is a readonly array
  const locales: string[] = i18n.locales;

  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

export function middleware(request: NextRequest) {
  let pathname = request.nextUrl.pathname;

  const response = NextResponse.next();
  response.headers.set('X-Incoming-Path', pathname);
  const debugParams = new URLSearchParams();
  debugParams.set('incomingPath', pathname);

  console.log(`Incoming request path: ${pathname}`);

  if (pathname.startsWith(PATH_PREFIX)) {
    pathname = pathname.slice(PATH_PREFIX.length) || '/';
  }

  response.headers.set('X-Modified-Path', pathname);
  debugParams.set('modifiedPath', pathname);
  console.log(`Modified request path: ${pathname}`);

  const redirectUrl = new URL(
    `/en${pathname.startsWith("/") ? "" : "/"}${pathname}`,
    request.url,
  );

  redirectUrl.search = debugParams.toString();

  return new NextResponse(
    JSON.stringify({
      message: 'Redirecting to locale',
      redirectUrl: redirectUrl.toString(),
      incomingPath: pathname,
      modifiedPath: pathname,
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );


  if (
    [
      '/manifest.json',
      '/favicon.ico',
    ].includes(pathname)
  ) {
    return;
  }

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    const redirectUrl = new URL(
      `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
      request.url,
    );

    redirectUrl.search = debugParams.toString();

    return NextResponse.redirect(redirectUrl);
  }

  request.nextUrl.pathname = pathname;
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
