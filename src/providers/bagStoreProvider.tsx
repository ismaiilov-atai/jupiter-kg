'use client';

import { type ReactNode, createContext, useContext, useRef } from 'react';
import { type StoreApi, useStore } from 'zustand';

import { type BagStore, createBagStore, initBagStore } from '@/stores/bagStore';

export const BagStoreContext = createContext<StoreApi<BagStore> | undefined>(
	undefined
);

export interface BagStoreProviderProps {
	children: ReactNode;
}

export const BagStoreProvider = ({ children }: BagStoreProviderProps) => {
	const storeRef = useRef<StoreApi<BagStore>>();

	if (!storeRef.current) {
		// storeRef.current = createBagStore(initBagStore());
		storeRef.current = createBagStore();
	}

	return (
		<BagStoreContext.Provider value={storeRef.current}>
			{children}
		</BagStoreContext.Provider>
	);
};

export const useBagStore = <T,>(selector: (store: BagStore) => T): T => {
	const bagStoreContext = useContext(BagStoreContext);

	if (!bagStoreContext) {
		throw new Error(`useBagStore must be used within BagStoreProvider`);
	}

	return useStore(bagStoreContext, selector);
};
