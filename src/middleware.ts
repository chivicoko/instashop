import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('authToken')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/users', req.url));
  }

  const hasValidToken = token === 'valid-token';

  if (hasValidToken) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL('/users', req.url));
  }
}

export const config = {
  matcher: ['/prodcuts'],
};
