import { createContext } from 'react';
import { Pizza } from '../types/Pizza';

interface MainContextType {
  pizzas: Pizza[];
  isLoading: boolean;
  isError: boolean;
}

export const MainContext = createContext<MainContextType | null>(null);
