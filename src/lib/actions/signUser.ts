'use server';

import { signIn } from '$/auth';
import { AuthError } from 'next-auth';
import { BoardingButtonType } from '../constants';
import setBoardingCompletedCookie from './boarding';

export const signUser = async () => {
  try {
    setBoardingCompletedCookie({ completed: true, buttonType: BoardingButtonType.SIGNUP })
    return await signIn('google');
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'AccessDenied':
          return "Access denied from provider";
        case 'Verification':
          return "Failed to verify";
        default:
          return "JupiterFault";
      }
    }
    throw error;
  }
}