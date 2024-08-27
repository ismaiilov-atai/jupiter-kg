'use server'

import { db } from '../db';
import { Sticker } from '../types/sticker';

export const uploadSticker = async (data: FormData) => {
  try {
    const sticker = JSON.parse(data.get('sticker') as string) as Sticker;
    if (!sticker.sizes.length) sticker.sizes = ['S', 'M', 'L'];

    await db.sticker.create({
      data: {
        title: sticker.title,
        description: sticker.description,
        src: `${process.env.IMAGE_BASE_URL}/${sticker.src}`,
        sizes: sticker.sizes,
        price: Number(sticker.price),
        tags: {
          connect: sticker.tags.map(id => ({ id }))
        }
      }
    });

    return { status: 'ok', message: 'Created succsesfully!' }
  } catch (error) {
    throw error
  }
}