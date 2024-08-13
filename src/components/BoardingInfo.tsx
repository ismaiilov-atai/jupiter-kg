import { AnimatePresence, motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

import { cn } from '@/lib/utils';

import easy from '$/public/boarding/easy.svg';
import quality from '$/public/boarding/quality.svg';
import quick from '$/public/boarding/quick.svg';
import { PageIndicator } from './PageIndicator';

interface BoardingInfoProps {
	pageIndex: number;
}

const images = [quality, easy, quick];

export default function BoardingInfo({ pageIndex }: BoardingInfoProps) {
	const t = useTranslations('Landing');
	const locale = useLocale();

	return (
		<section className='flex h-full w-full flex-col justify-evenly'>
			<AnimatePresence mode='wait'>
				<motion.div
					key={images[pageIndex].src}
					initial={{ x: 300, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: -300, opacity: 0 }}
					transition={{
						ease: 'anticipate',
						duration: 0.5,
					}}
				>
					<section className='flex flex-col gap-10'>
						<Image
							src={images[pageIndex]}
							alt={images[pageIndex].src}
							className='place-self-center'
							priority
						/>
						<section className='flex flex-col'>
							<h1
								className={cn(
									`text-center text-4xl font-extrabold leading-10`,
									{
										'text-3xl': locale === 'ru',
									}
								)}
							>
								{t(`title${pageIndex}`)}
							</h1>
							<p className='text-l mt-2 text-balance text-center font-semibold italic leading-6'>
								{t(`description${pageIndex}`)}
							</p>
						</section>
					</section>
				</motion.div>
			</AnimatePresence>

			<PageIndicator
				pageIndex={pageIndex}
				pageCount={4}
				classNames='h-2 w-2 bg-primary'
			/>
		</section>
	);
}
