import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  sort: number;
  reverse: boolean;
  category: number;
  search: string;
  page: number;
}

const initialState: State = {
  sort: 0,
  reverse: false,
  category: 0,
  search: '',
  page: 1,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<number>) => {
      state.sort = action.payload;
    },
    setReverse: (state, action: PayloadAction<boolean>) => {
      state.reverse = action.payload;
    },
    setCategory: (state, action: PayloadAction<number>) => {
      state.category = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const filterSelector = (state: { filter: State }) => state.filter;

export const { setSort, setReverse, setCategory, setSearch, setPage } =
  filterSlice.actions;

export default filterSlice.reducer;
