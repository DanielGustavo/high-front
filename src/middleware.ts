import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('high:token')?.value;
  const isAuthenticated = !!token;

  const privatePaths = ['/authpage'];

  if (!isAuthenticated && privatePaths.includes(request.nextUrl.pathname)) {
    const newUrl = `${request.nextUrl.origin}`;

    return NextResponse.redirect(newUrl);
  }
}
