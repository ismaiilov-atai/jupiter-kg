import { useTranslations } from 'next-intl';

import LocaleSwitcherSelect from '@/components/LocaleSwitcherSelect';

export default function Home() {
	const t = useTranslations('Landing');
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h1>{t('title')}</h1>
			<LocaleSwitcherSelect />
		</main>
	);
}
