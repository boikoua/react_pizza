import { createContext } from 'react';
import { Pizza } from '../types/Pizza';

interface MainContextType {
  pizzas: Pizza[];
  sortValue: number;
  setSortValue: (val: number) => void;
  reverse: boolean;
  setReverse: (val: boolean) => void;
  isLoading: boolean;
  categoryValue: number;
  setCategoryValue: (val: number) => void;
  page: number;
  setPage: (val: number) => void;
}

export const MainContext = createContext<MainContextType | null>(null);
