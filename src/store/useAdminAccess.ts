import { create } from 'zustand';

interface States {
  isAdminRequired: boolean;

}

export const useAdminAccess = create<States>(() => ({
  isAdminRequired: false,
}));