'use server'

import { db } from '../db'
import { TagsType } from '@/app/[lang]/admin/create-sticker/page'

export const getTags = async (): Promise<TagsType[]> => {
  try {
    return await db.tag.findMany({});
  } catch (error) {
    console.log(error);
    return []
  }
}