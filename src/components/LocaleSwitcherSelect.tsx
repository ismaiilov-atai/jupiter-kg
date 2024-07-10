'use client';

import { useLocale } from 'next-intl';
import { Fragment, useTransition } from 'react';

import {
	Select,
	SelectContent,
	SelectItem,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

import { locales } from '@/config';
import { LANG_SELECTORS } from '@/lib/constants';
import { usePathname, useRouter } from '@/navigation';

export default function LocaleSwitcherSelect() {
	const router = useRouter();
	const [_, startTransition] = useTransition();
	const locale = useLocale();
	const path = usePathname();

	const onSelectChange = (value: string) => {
		startTransition(() => router.replace(path, { locale: value }));
	};

	return (
		<Select onValueChange={onSelectChange} value={locale}>
			<SelectTrigger className='w-[100px] rounded-[8px] border-0 bg-gray-50 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0'>
				<SelectValue placeholder={LANG_SELECTORS[locale]} />
			</SelectTrigger>
			<SelectContent>
				{locales.map((current, index) => {
					return (
						<Fragment key={`${current}${index}`}>
							<SelectItem value={current} key={`${index}${current}`}>
								{LANG_SELECTORS[current]}
							</SelectItem>
							{index !== locales.length - 1 && (
								<SelectSeparator className='bg-slate-100' />
							)}
						</Fragment>
					);
				})}
			</SelectContent>
		</Select>
	);
}
