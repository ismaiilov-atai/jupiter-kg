import { UploadIcon } from 'lucide-react';
import Image from 'next/image';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { IStickerInput } from '@/lib/types/types';

import { Button } from '../ui/button';
import { Label } from '../ui/label';

interface StickerSelectorProps {
	state: string | undefined;
	onChangeListener: (e: React.ChangeEvent<HTMLInputElement>) => void;
	register: UseFormRegister<IStickerInput>;
	errors: FieldErrors<IStickerInput>;
}

export const StickerSelector = ({
	state,
	onChangeListener,
	register,
	errors,
}: StickerSelectorProps) => {
	return (
		<section className='flex flex-col items-center justify-around space-y-3 rounded-lg border-2 border-dashed border-gray-300 p-6 dark:border-gray-700 max-sm:w-[200px] lg:h-2/3 lg:w-1/2'>
			<>
				{state ?
					<Image src={state} alt='img selected' width={150} height={150} />
				:	<>
						<UploadIcon className='h-12 w-12 text-gray-400' />
						<p className='text-gray-500 dark:text-gray-400'>
							Drag and drop your stickers here
						</p>
						{errors.file && (
							<p role='alert' className='text-[10px] text-red-500'>
								{errors.file.message}
							</p>
						)}
					</>
				}
			</>

			<input
				type='file'
				className='hidden'
				accept='image/*'
				id='sticker'
				{...register('file', {
					required: 'Sticker selection is required.',
					onChange: onChangeListener,
				})}
			/>

			<Button type='button' variant='outline'>
				<Label htmlFor='sticker'>Browse Files</Label>
			</Button>
		</section>
	);
};
