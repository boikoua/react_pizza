import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pizza } from '../../types/Pizza';

type FetchParams = {
  category: number;
  search: string;
};

export const fetchAllData = createAsyncThunk(
  'data/fetch',
  async (params: FetchParams) => {
    const { category, search } = params;

    const DATA_LINK = `https://66eb10d955ad32cda47b9003.mockapi.io/items?${
      category > 0 ? `category=${category}` : ''
    }&name=${search || ''}`;

    const response = await fetch(DATA_LINK);
    const data = await response.json();
    return data as Pizza[];
  }
);

type State = {
  items: Pizza[];
  status: 'loading' | 'error' | 'success';
};

const initialState: State = {
  items: [],
  status: 'loading',
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllData.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(
      fetchAllData.fulfilled,
      (state, action: PayloadAction<Pizza[]>) => {
        state.items = action.payload;
        state.status = 'success';
      }
    );
    builder.addCase(fetchAllData.rejected, (state) => {
      state.items = [];
      state.status = 'error';
    });
  },
});

export const dataSelector = (state: { data: State }) => state.data;

export default dataSlice.reducer;
