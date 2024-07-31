import { ADMIN_NAV_PATHS } from '@/lib/constants';
import { AppRouteHandlerFnContext } from '@/lib/types/next-auth';

import { NextRequest, NextResponse } from 'next/server';
import { getPathnameRegex } from '@/lib/utils';

import { intlMiddleware } from './intl-middleware';

import { auth } from '$/auth';


const authPages = ADMIN_NAV_PATHS.map(item => item.path)

const authPathnameRegex = getPathnameRegex(authPages);

export const authMiddleware = (
  request: NextRequest,
  ctx: AppRouteHandlerFnContext
) => {

  return auth((req) => {
    const path = req.nextUrl.pathname;
    const isAuth = req.auth;

    const isAdminPage = authPathnameRegex.test(path);
    if (isAuth?.user.role !== 'admin' && isAdminPage) {
      return NextResponse.redirect(new URL('/signin', req.url));
    }

    return intlMiddleware(request);
  })(request, ctx);
};