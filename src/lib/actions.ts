'use server'

import { redirect } from '@/navigation';
import { cookies } from 'next/headers'

const BOARDING_COOKIE_KEY = 'first_time';

async function setBoardingRequiredCookie(isFirstTime: boolean) {
  const oneMonth = 30.44 * 24 * 60 * 60 * 1000;
  cookies().set({
    name: BOARDING_COOKIE_KEY,
    value: `${isFirstTime}`,
    expires: Date.now() + oneMonth
  })
}

export async function getBoardingRequiredCookie(): Promise<boolean> {
  const cookieStore = cookies()
  const hasCookie = cookieStore.has(BOARDING_COOKIE_KEY)
  return !hasCookie;
}

export const skipOnboarding = async () => {
  setBoardingRequiredCookie(false);
  redirect('/');
};