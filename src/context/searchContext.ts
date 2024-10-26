import { createContext } from 'react';

interface SearchContextType {
  searchValue: string;
  setSearchValue: (val: string) => void;
  setPage: (val: number) => void;
}

export const SearchContext = createContext<SearchContextType | null>(null);
