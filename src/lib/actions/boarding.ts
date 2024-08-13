'use server'

import { cookies } from 'next/headers'
import { BOARDING_COOKIE_KEY, BoardingButtonType } from '../constants';
import { redirect } from '@/navigation';

interface BoardingCookieProps {
  completed: boolean,
  buttonType: BoardingButtonType
}

function setBoardingCompletedCookie({ completed, buttonType }: BoardingCookieProps) {
  const oneMonth = 30.44 * 24 * 60 * 60 * 1000;
  cookies().set({
    name: BOARDING_COOKIE_KEY,
    value: `${completed}`,
    expires: Date.now() + oneMonth
  })

  if (buttonType === BoardingButtonType.SIGNUP) {
    redirect('/signin');
  }
  if (buttonType === BoardingButtonType.EXPLORE) {
    redirect('/');
  }
}

export default setBoardingCompletedCookie