import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './features/dataSlice';
import pizzaReducer from './features/pizzaSlice';
import filterReducer from './features/filterSlice';
import cartReducer from './features/cartSlice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
    pizza: pizzaReducer,
    filter: filterReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
