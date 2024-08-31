import { Loader } from 'lucide-react';
import React from 'react';

import { cn } from '@/lib/utils';

import { Button } from '../ui/button';

interface UploadActionButtonsProps {
	validateButton: () => boolean;
	isSubmitting: boolean;
}

const UploadActionButtons = ({
	validateButton,
	isSubmitting,
}: UploadActionButtonsProps) => {
	return (
		<section className='flex h-10 justify-end space-x-10 font-extrabold tracking-wide max-lg:mt-10'>
			<Button variant='destructive' className='w-[20%] rounded-sm'>
				Cancel
			</Button>
			<Button
				disabled={validateButton()}
				type='submit'
				className='relative w-[20%] gap-x-2 rounded-sm bg-green-600 hover:bg-green-500'
			>
				<Loader
					width={24}
					height={24}
					className={cn('absolute animate-spin self-center', {
						hidden: !isSubmitting,
					})}
				/>
				Upload
			</Button>
		</section>
	);
};

export default UploadActionButtons;
