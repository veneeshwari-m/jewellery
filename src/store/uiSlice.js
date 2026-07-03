import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSimOpen: false,
  isHistoryOpen: false,
  activeTab: 'gold22k', // 'gold22k', 'gold24k', 'gold18k', 'silver', 'platinum'
  hoveredPoint: null
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setIsSimOpen: (state, action) => {
      state.isSimOpen = action.payload;
    },
    setIsHistoryOpen: (state, action) => {
      state.isHistoryOpen = action.payload;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setHoveredPoint: (state, action) => {
      state.hoveredPoint = action.payload;
    }
  },
});

export const { setIsSimOpen, setIsHistoryOpen, setActiveTab, setHoveredPoint } = uiSlice.actions;
export default uiSlice.reducer;
