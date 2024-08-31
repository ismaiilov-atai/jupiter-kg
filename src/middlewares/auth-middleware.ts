import { Access_Redirects, ADMIN_NAV_PATHS, BOARDING_COOKIE_KEY } from '@/lib/constants';
import { AppRouteHandlerFnContext } from '@/lib/types/next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { intlMiddleware } from './intl-middleware';
import { getPathnameRegex } from '@/lib/utils';
import { auth } from '$/auth';
import { setRedirectCookie } from '@/lib/helpers/setRedirectCookie';


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
      return NextResponse.redirect(new URL('/', req.url), {
        ...setRedirectCookie(Access_Redirects.SIGNIN_REDIRECT)
      });
    }

    if (session?.user.role !== 'admin' && isAdminPage) {
      const homeUrl = new URL('/', request.nextUrl);

      return NextResponse.redirect(homeUrl, {
        ...setRedirectCookie(Access_Redirects.ADMIN_ACCESS_REQUIRED)
      })
    }
    if (!req.cookies.get(BOARDING_COOKIE_KEY) && !path.includes('/onboarding') && path !== '/') {
      return NextResponse.redirect(new URL('/onboarding', req.url));
    }

    return intlMiddleware(request);
  })(request, ctx);
};