import { configureStore } from '@reduxjs/toolkit';
import ratesReducer from './ratesSlice';
import uiReducer from './uiSlice';

export const store = configureStore({
  reducer: {
    rates: ratesReducer,
    ui: uiReducer,
  },
});
