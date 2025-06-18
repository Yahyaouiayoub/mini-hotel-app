// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import DataSlice from './Slices/SliceData.jsx';
import CartSlice from './Slices/CartSlice.jsx';

export const store = configureStore({
  reducer: {
    data: DataSlice,
    cart: CartSlice,
  },
});
