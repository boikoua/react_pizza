import { createContext } from 'react';
import { Pizza } from '../types/Pizza';

interface MainContextType {
  pizzas: Pizza[];
  isLoading: boolean;
}

export const MainContext = createContext<MainContextType | null>(null);
