import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gold22k: 13945,
  gold24k: 15213,
  gold18k: 11410,
  silver: 270,
  platinum: 7473,
  lastUpdated: '06/05/26 3:54 PM'
};

const ratesSlice = createSlice({
  name: 'rates',
  initialState,
  reducers: {
    setRates: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setRates } = ratesSlice.actions;
export default ratesSlice.reducer;
