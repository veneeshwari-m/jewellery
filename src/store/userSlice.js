import { createSlice } from '@reduxjs/toolkit';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('userState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('userState', serializedState);
  } catch {
    // ignore write errors
  }
};

const defaultState = {
  isLoggedIn: false,
  details: {
    firstName: '',
    lastName: '',
    email: '',
    mobile: ''
  },
  addresses: [],
  registeredAccounts: [],
  orders: []
};

const loadedState = loadState();
const initialState = loadedState 
  ? { 
      ...defaultState, 
      ...loadedState, 
      registeredAccounts: loadedState.registeredAccounts || [],
      orders: loadedState.orders || []
    } 
  : defaultState;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      if (!state.registeredAccounts) {
        state.registeredAccounts = [];
      }
      state.registeredAccounts.push(action.payload);
      state.isLoggedIn = true;
      state.details = { ...action.payload };
      if (action.payload.address) {
        state.addresses = [
          {
            id: Date.now().toString(),
            ...action.payload.address
          }
        ];
      }
      saveState(state);
    },
    setUserDetails: (state, action) => {
      state.isLoggedIn = true;
      state.details = { ...state.details, ...action.payload };
      saveState(state);
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.details = defaultState.details;
      state.addresses = [];
      saveState(state);
    },
    addAddress: (state, action) => {
      state.addresses.push({
        id: Date.now().toString(),
        ...action.payload
      });
      saveState(state);
    },
    removeAddress: (state, action) => {
      state.addresses = state.addresses.filter(addr => addr.id !== action.payload);
      saveState(state);
    },
    placeOrder: (state, action) => {
      if (!state.orders) {
        state.orders = [];
      }
      state.orders.unshift({
        orderId: `ORD-${Date.now()}`,
        date: new Date().toISOString(),
        status: 'Processing',
        ...action.payload
      });
      saveState(state);
    }
  },
});

export const { registerUser, setUserDetails, logout, addAddress, removeAddress, placeOrder } = userSlice.actions;
export default userSlice.reducer;
