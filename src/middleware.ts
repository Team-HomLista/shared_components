import { NextRequest, NextResponse } from 'next/server';

// Simple brand detection for POC
export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const subdomain = host.split('.')[0];
  
  // List of supported brands
  const supportedBrands = ['acme', 'zenit', 'demo'];
  
  // Check if it's a white-label subdomain or localhost testing
  const isLocalhost = host.includes('localhost');
  const isWhiteLabelPath = request.nextUrl.pathname.startsWith('/wl/');
  
  if (supportedBrands.includes(subdomain) || (isLocalhost && isWhiteLabelPath)) {
    const url = request.nextUrl.clone();
    let brandSlug = subdomain;
    
    // For localhost testing, extract brand from URL path
    if (isLocalhost && isWhiteLabelPath) {
      const pathParts = url.pathname.split('/');
      brandSlug = pathParts[2]; // /wl/[brand]/...
      
      // Only process if it's a supported brand
      if (!supportedBrands.includes(brandSlug)) {
        return NextResponse.next();
      }
    } else {
      // For subdomain, rewrite to white-label route
      url.pathname = `/wl/${subdomain}${url.pathname === '/' ? '' : url.pathname}`;
    }
    
    // Add brand info to headers for components to use
    const response = isLocalhost && isWhiteLabelPath ? NextResponse.next() : NextResponse.rewrite(url);
    response.headers.set('x-brand', brandSlug);
    response.headers.set('x-is-white-label', 'true');
    
    return response;
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};