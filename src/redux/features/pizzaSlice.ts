import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pizza } from '../../types/Pizza';

const DATA_LINK = 'https://66eb10d955ad32cda47b9003.mockapi.io/items';

interface FetchParams {
  sort: string;
  category: number;
  search: string;
  reverse: boolean;
  page: number;
}

export const fetchData = createAsyncThunk(
  'pizza/fetch',
  async (params: FetchParams) => {
    const { sort, category, search, reverse, page } = params;

    const LIMIT_COUNT = 4;

    const SEARCH_URL = `${DATA_LINK}?sortBy=${sort}&category=${
      category ? category : ''
    }&name=${search}&order=${
      reverse ? 'desc' : ''
    }&limit=${LIMIT_COUNT}&page=${page}`;

    const response = await fetch(SEARCH_URL);
    const data = await response.json();
    return data as Pizza[];
  }
);

interface State {
  pizzas: Pizza[];
  error: boolean;
  loading: boolean;
}

const initialState: State = {
  pizzas: [],
  error: false,
  loading: true,
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchData.fulfilled,
      (state, action: PayloadAction<Pizza[]>) => {
        state.pizzas = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(fetchData.rejected, (state) => {
      state.pizzas = [];
      state.error = true;
      state.loading = false;
    });
  },
});

export default pizzaSlice.reducer;
