// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import jwt from 'jsonwebtoken';

// export function middleware(req: NextRequest) {
//   const token = req.cookies.get('authToken')?.value;

//   if (!token) {
//     return NextResponse.redirect(new URL('/users', req.url));
//   }

//   try {
//     jwt.verify(token, process.env.JWT_SECRET!);
//     return NextResponse.next();
//   } catch (err) {
//     return NextResponse.redirect(new URL('/users', req.url));
//   }
// }

// export const config = {
//   matcher: ['/products'],
// };


import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('authToken')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/users', req.url));
  }

  // Simulate checking if the user exists (e.g., via localStorage or another method)
  const hasValidToken = token === 'valid-token'; // Just an example check for now

  if (hasValidToken) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL('/users', req.url));
  }
}

export const config = {
  matcher: ['/prodcuts'],
};
