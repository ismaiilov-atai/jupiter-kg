import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { IStickerInput } from '@/lib/types/types';

import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface StickerInputsProps {
	fieldName: 'title' | 'description' | 'price';
	register: UseFormRegister<IStickerInput>;
	errors: FieldErrors<IStickerInput>;
	lable: string;
	minLength: number;
	isSlider?: boolean;
	priceState?: number;
	setPrice?: (price: number) => void;
}

const StickerInputs = ({
	fieldName,
	errors,
	register,
	lable,
	minLength,
	isSlider,
	priceState,
	setPrice,
}: StickerInputsProps) => {
	return (
		<div className='grid w-full items-center gap-1.5'>
			{isSlider && priceState ?
				<>
					<section className='flex w-full justify-between'>
						<Label>{lable}</Label>
						<Label>{priceState} KGS</Label>
					</section>
					<input
						type='range'
						max={100}
						step={5}
						min={5}
						className='accent-black'
						onInput={e => setPrice && setPrice(Number(e.currentTarget.value))}
						{...register(fieldName)}
					/>
				</>
			:	<>
					<Label htmlFor={fieldName}>{lable}</Label>
					<Input
						type='text'
						id={fieldName}
						placeholder={`Type your ${fieldName} here..`}
						{...register(fieldName, { required: true, minLength })}
					/>
					{errors[fieldName] && (
						<p role='alert' className='text-[10px] text-red-500'>
							{lable} should have at least {minLength} letters
						</p>
					)}
				</>
			}
		</div>
	);
};

export default StickerInputs;
