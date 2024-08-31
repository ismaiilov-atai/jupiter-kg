'use client';

import { ChangeEvent, useEffect, useState, useTransition } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

import SizeSelector from '@/components/admin/SizeSelector';
import StickerInputs from '@/components/admin/StickerInputs';
import { StickerSelector } from '@/components/admin/StickerSelector';
import UploadActionButtons from '@/components/admin/UploadActionButtons';
import { MultiSelect } from '@/components/multiSelect';

import { getTags } from '@/lib/actions/getTags';
import { STICKER_SIZES } from '@/lib/constants';
import {
	upladStickerWithStatus,
	uploadImageWithStatus,
} from '@/lib/helpers/uploadStickerWithStatus';
import { IStickerInput, Sticker, TagType } from '@/lib/types/types';

function CreateSticker() {
	const [price, setPrice] = useState<number>(40);
	const [selectedTags, setSelectedTags] = useState<string[]>([]);
	const [tagsList, setTagsList] = useState<TagType[]>([]);
	const [isPanding, startTransition] = useTransition();

	const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
	const [selectedSticker, setSelectedSticker] = useState<string>();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitSuccessful },
		reset,
	} = useForm<IStickerInput>();

	useEffect(() => {
		if (isSubmitSuccessful) {
			toast('Sticker has been created successfully');
			setSelectedSticker(undefined);
			setSelectedSizes([]);
			setSelectedTags([]);
			reset();
		}
	}, [isSubmitSuccessful]);

	useEffect(() => {
		startTransition(async () => setTagsList(await getTags()));
	}, []);

	const onSelectSizesListener = (sizeIndex: number) => {
		if (selectedSizes.includes(STICKER_SIZES[sizeIndex])) {
			setSelectedSizes(prevState =>
				prevState.filter(item => item !== STICKER_SIZES[sizeIndex])
			);
		} else {
			setSelectedSizes(prevState => [...prevState, STICKER_SIZES[sizeIndex]]);
		}
	};

	const onSelectStcikerListener = async (e: ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files || e.target.files.length === 0) {
			setSelectedSticker(undefined);
			return;
		}

		const objectUrl = URL.createObjectURL(e.target.files[0]);
		setSelectedSticker(objectUrl);
	};

	const onSubmit: SubmitHandler<IStickerInput> = async data => {
		const resp = await uploadImageWithStatus(data.file);
		if (resp.status === 'failed') return;

		const stickerToUpload: Sticker = {
			title: data.title,
			description: data.description,
			src: data.file[0].name,
			price: price,
			sizes: selectedSizes,
			tags: selectedTags,
		};
		await upladStickerWithStatus(stickerToUpload);
	};

	const validateButton = (): boolean => {
		if (isSubmitting) return true;
		if (selectedTags.length > 1) return false;
		return true;
	};

	return (
		<section className='flex w-full flex-col space-y-10 px-6 py-10'>
			<h1 className='text-xl font-extrabold uppercase leading-[26px] tracking-widest'>
				Upload sticker
			</h1>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex h-full space-x-6 max-lg:flex-col max-lg:items-center max-lg:space-y-8'
			>
				<StickerSelector
					state={selectedSticker}
					onChangeListener={onSelectStcikerListener}
					errors={errors}
					register={register}
				/>
				<section className='flex w-[70%] flex-col justify-between rounded-sm border-2 px-3 py-2 drop-shadow-sm'>
					<section className='space-y-10'>
						<StickerInputs
							fieldName='title'
							lable='Title'
							register={register}
							minLength={5}
							errors={errors}
						/>
						<StickerInputs
							fieldName='description'
							lable='Description'
							register={register}
							minLength={10}
							errors={errors}
						/>
						<StickerInputs
							fieldName='price'
							lable='price'
							register={register}
							minLength={100}
							isSlider
							priceState={price}
							setPrice={setPrice}
							errors={errors}
						/>

						<MultiSelect
							options={tagsList}
							onValueChange={setSelectedTags}
							defaultValue={selectedTags}
							placeholder='Select tags'
							variant='inverted'
							animation={1}
							maxCount={3}
							isPanding={isPanding}
						/>

						<SizeSelector
							selectedSizes={selectedSizes}
							onSelectSizesListener={onSelectSizesListener}
						/>
					</section>

					<UploadActionButtons
						isSubmitting={isSubmitting}
						validateButton={validateButton}
					/>
				</section>
			</form>
		</section>
	);
}

export default CreateSticker;
