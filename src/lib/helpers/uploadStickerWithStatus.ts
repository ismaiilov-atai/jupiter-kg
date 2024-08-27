import { toast } from 'sonner';
import { uploadImage } from '../actions/uploadImage';

import { uploadSticker } from '../actions/uploadSticker';
import { Sticker } from '../types/types';

export const uploadImageWithStatus = async (files: FileList) => {
  const formData = new FormData();
  formData.append('file', files[0]);
  const response = await uploadImage(formData);

  if (response.status === 'failed') {
    toast.warning('Failed to upload', {
      description: response.message,
    });
    throw new Error(response.message)
  }
  return response;
}

export const upladStickerWithStatus = async (sticker: Sticker) => {
  try {
    const formStickerData = new FormData();
    formStickerData.append('sticker', JSON.stringify(sticker));
    await uploadSticker(formStickerData);
  } catch (error) {
    toast.error('Failed to upload', { description: (error as Error).message })
    throw error
  }


}