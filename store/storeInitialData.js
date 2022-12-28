import create from "zustand";

export const useInitialDataStore = create((set) => ({
  initialData: [],
  setInitialData: (initialData) => set({ initialData }),
}));
