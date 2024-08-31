import { useTranslations } from 'next-intl';

import ToasterClient from '@/components/ToasterClient';
import { Button } from '@/components/ui/button';

import { Access_Redirects } from '@/lib/constants';
import { getCookies } from '@/lib/helpers/getCookies';

import { signOut } from '$/auth';

export default function Home() {
	const t = useTranslations('Landing');
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h1>{t('title1')}</h1>
			<form
				action={async () => {
					'use server';
					await signOut();
				}}
			>
				<Button type='submit'>Sign Out</Button>
			</form>
			<ToasterClient
				redirectCookieVal={getCookies(Access_Redirects.REDIRECT_COOKIE_KEY)}
			/>
		</main>
	);
}
