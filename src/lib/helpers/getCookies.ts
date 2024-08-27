import { cookies } from 'next/headers';

export const getCookies = (name: string): string => cookies().get(name)?.value || '';
