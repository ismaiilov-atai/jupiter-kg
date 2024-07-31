import { NextRequest, NextResponse } from 'next/server';
import { AppRouteHandlerFnContext } from './lib/types/next-auth';
import { authMiddleware } from './middlewares/auth-middleware';

export const middleware = (
  request: NextRequest,
  ctx: AppRouteHandlerFnContext
): NextResponse => {
  if (request.nextUrl.pathname.startsWith('/auth')) {
    return NextResponse.next();
  }

  return authMiddleware(request, ctx) as NextResponse;
};

export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};