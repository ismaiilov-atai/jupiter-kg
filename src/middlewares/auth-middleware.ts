import { Access_Redirects, ADMIN_NAV_PATHS, BOARDING_COOKIE_KEY } from '@/lib/constants';
import { AppRouteHandlerFnContext } from '@/lib/types/next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { intlMiddleware } from './intl-middleware';
import { getPathnameRegex } from '@/lib/utils';
import { auth } from '$/auth';


const authPages = ADMIN_NAV_PATHS.map(item => item.path)
const authPathnameRegex = getPathnameRegex(authPages);

export const authMiddleware = (
  request: NextRequest,
  ctx: AppRouteHandlerFnContext
) => {

  return auth(async (req) => {
    const path = req.nextUrl.pathname;
    const session = await auth();
    const isAdminPage = authPathnameRegex.test(path);

    if (!session?.user && isAdminPage) {
      return NextResponse.redirect(new URL('/signin', req.url));
    }
    if (session?.user.role !== 'admin' && isAdminPage) {
      const homeUrl = new URL('/', request.nextUrl);
      homeUrl.searchParams.set('access', Access_Redirects.ADMIN_ACCESS_REQUIRED)
      return NextResponse.redirect(homeUrl)
    }
    if (!req.cookies.get(BOARDING_COOKIE_KEY) && !path.includes('/onboarding')) {
      return NextResponse.redirect(new URL('/onboarding', req.url));
    }

    return intlMiddleware(request);
  })(request, ctx);
};