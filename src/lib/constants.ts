export const LANG_SELECTORS: { [key: string]: string } = {
  en: '🇺🇸 EN',
  ru: '🇷🇺 РУ',
  kg: '🇰🇬 КР',
}

export const ADMIN_NAV_PATHS = [
  {
    path: '/admin',
    title: "Products"
  },
  {
    path: '/orders',
    title: "Orders"
  },
  {
    path: '/users',
    title: "Users"
  },
  {
    path: '/create-sticker',
    title: "Create Sticker"
  }
].map((item, index) => (
  index !== 0 ? {
    ...item,
    path: `/admin${item.path}`
  } : item)
)

export const BOARDING_COOKIE_KEY = 'jupiter-boarding-completed';

export enum Access_Redirects {
  REDIRECT_COOKIE_KEY = 'jupiter-redirect',
  ADMIN_ACCESS_REQUIRED = 'admin-required',
  SIGNIN_REDIRECT = 'signin-required'
}

export enum BoardingButtonType {
  SIGNUP = 'signup',
  EXPLORE = 'explore',
}
export const STICKER_SIZES = ['S', 'M', 'L'];