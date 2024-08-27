
import { Access_Redirects } from '../constants'

export const setRedirectCookie = (value: string): { [key: string]: { [key: string]: string } } => {
  return {
    headers: {
      'Set-Cookie': `${Access_Redirects.REDIRECT_COOKIE_KEY}=${value}; max-age=1`
    }
  }
}