import create from "zustand";

export const useFilterStore = create((set) => ({
  search: "",
  setSearch: (search) => set({ search }),
  select: "",
  setSelect: (select) => set({ select }),
}));
