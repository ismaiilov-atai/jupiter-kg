import { findBag } from '@/lib/actions/getBag';
import { Bag } from '@prisma/client';
import { createStore } from 'zustand/vanilla';

export type BagState = {
  bag: Bag;
}

type BagAction = {
  setBag: (bag: BagState['bag']) => void
}

export type BagStore = BagState & BagAction

export const defaultInitState: BagState = {
  bag: {} as Bag,
}

export const initBagStore = async (): Promise<BagState> => {
  try {
    const currentBag = await findBag();
    return { bag: currentBag }
  } catch (error) {
    return defaultInitState
  }
}

export const createBagStore = () => {
  return createStore<BagStore>()((set) => ({
    ...defaultInitState,
    setBag: (bag) => set(() => ({ bag }))
  }))
}