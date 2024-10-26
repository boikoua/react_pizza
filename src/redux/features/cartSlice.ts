import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pizza } from '../../types/Pizza';

interface State {
  cart: Pizza[];
}

const initialState: State = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Pizza>) => {
      state.cart.push(action.payload);
    },
    clear: (state) => {
      state.cart = [];
    },
    remove: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    removeOne: (state, action: PayloadAction<number>) => {
      const index = state.cart.findIndex((item) => item.id === action.payload);

      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
  },
});

export const { add, clear, remove, removeOne } = cartSlice.actions;

export default cartSlice.reducer;
