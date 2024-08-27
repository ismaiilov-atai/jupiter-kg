'use server'

import { auth } from '$/auth';
import { Bag } from '@prisma/client';
import { db } from '../db';


export const findBag = async (): Promise<Bag> => {
  const session = await auth();
  if (session?.user.id) {
    try {
      return await db.bag.findUniqueOrThrow({
        where: {
          userId: session?.user.id,
        }
      });
    } catch (error) {
      throw error
    }
  } else return {} as Bag
}

export const findOrInitBag = async () => {
  const session = await auth();
  if (session?.user.id) {
    try {
      await db.bag.findUniqueOrThrow({
        where: {
          userId: session?.user.id,
        }
      });
    } catch (error) {
      await db.bag.create({
        data: {
          userId: session?.user.id,
        }
      });
    }
  }
}