import { useTranslations } from 'next-intl';

import { redirect } from '@/navigation';

export default function Home() {
	const t = useTranslations('Landing');
	// if user is admin redirect it to admin page
	// redirect('/admin');

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h1>{t('title')}</h1>
		</main>
	);
}
