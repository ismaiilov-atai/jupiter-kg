import { locales } from '@/config';

import createIntlMiddleware from 'next-intl/middleware';

export const intlMiddleware = createIntlMiddleware({
  // A list of all locales that are supported
  locales,
  // Used when no locale matches
  defaultLocale: 'ru',
  localePrefix: 'always'
});