import React from 'react';

import { STICKER_SIZES } from '@/lib/constants';

import { Badge } from '../ui/badge';
import { Label } from '../ui/label';

interface SizeSelectorProps {
	selectedSizes: string[];
	onSelectSizesListener: (index: number) => void;
}

const SizeSelector = ({
	selectedSizes,
	onSelectSizesListener,
}: SizeSelectorProps) => {
	return (
		<div className='grid w-full items-center gap-6'>
			<Label>Available sizes: </Label>
			<section className='flex w-full justify-around'>
				{STICKER_SIZES.map((size, index) => {
					return (
						<Badge
							key={size}
							variant={selectedSizes.includes(size) ? 'default' : 'secondary'}
							className='w-1/4 justify-center'
							onClick={() => onSelectSizesListener(index)}
						>
							{size}
						</Badge>
					);
				})}
			</section>
		</div>
	);
};

export default SizeSelector;
