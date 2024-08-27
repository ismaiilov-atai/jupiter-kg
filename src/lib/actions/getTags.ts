'use server'

import { db } from '../db'
import { TagType } from '$/src/lib/types/types'


export const getTags = async (): Promise<TagType[]> => {
  try {
    return await db.tag.findMany({});
  } catch (error) {
    console.log(error);
    return []
  }
}