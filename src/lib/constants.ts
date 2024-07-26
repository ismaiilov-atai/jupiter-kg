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
