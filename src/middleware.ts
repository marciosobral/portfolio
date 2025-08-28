import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, Locale, locales } from './lib/i18n';
import { isMaintenanceActive } from './lib/maintenance';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const { locale, hasLocale, pathWithoutLocale } = parseLocaleFromPath(pathname);

  if (!hasLocale) {
    if (pathname === '/pt') {
      return NextResponse.redirect(new URL('/pt/', request.url));
    }
    
    request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
    
    if (isMaintenanceActive() && !pathname.startsWith('/maintenance')) {
      return NextResponse.redirect(new URL(`/${defaultLocale}/maintenance`, request.url));
    }
    
    return NextResponse.rewrite(request.nextUrl);
  }

  if (isMaintenanceActive()) {
    if (!pathWithoutLocale.startsWith('/maintenance')) {
      return NextResponse.redirect(new URL(`/${locale}/maintenance`, request.url));
    }
  } else {
    if (pathWithoutLocale.startsWith('/maintenance')) {
      return NextResponse.redirect(new URL(`/${locale}`, request.url));
    }
  }

  return NextResponse.next();
}

function parseLocaleFromPath(pathname: string) {
  const segments = pathname.split('/');
  const firstSegment = segments[1];

  if (locales.includes(firstSegment as Locale)) {
    return {
      locale: firstSegment as Locale,
      hasLocale: true,
      pathWithoutLocale: '/' + segments.slice(2).join('/')
    };
  }

  return {
    locale: defaultLocale,
    hasLocale: false,
    pathWithoutLocale: pathname
  };
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
