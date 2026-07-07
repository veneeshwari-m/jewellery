import { configureStore } from '@reduxjs/toolkit';
import ratesReducer from './ratesSlice';
import uiReducer from './uiSlice';
import cartReducer from './cartSlice';
import wishlistReducer from './wishlistSlice';

export const store = configureStore({
  reducer: {
    rates: ratesReducer,
    ui: uiReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});
