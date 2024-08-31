import Image from 'next/image';
import React, { useEffect } from 'react';

import bagIcon from '$/public/shopping-bag.svg';
import { Button } from './ui/button';
import { useBagStore } from '@/providers/bagStoreProvider';
import { initBagStore } from '@/stores/bagStore';

export const ShoppingBag = () => {
	const { bag, setBag } = useBagStore(state => state);

	useEffect(() => {
		initBag();
	}, [bag.id]);

	const initBag = async () => {
		initBagStore().then(bag => setBag(bag['bag']));
	};

	return (
		<Button
			variant='outline'
			className='flex flex-col items-center justify-center rounded-[8px] bg-slate-50 px-1 text-black'
		>
			<span className='absolute h-3 text-[0.6rem] text-blue-500'>
				{bag.quantity}
			</span>
			<Image src={bagIcon} alt='shopping bag icon' height={26} width={26} />
		</Button>
	);
};
