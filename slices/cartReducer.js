import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [{ ...action.payload }, ...state.items];
    },
    removeFromCart: (state, action) => {
      let filtred = state.items;

      filtred.splice(
        filtred.findIndex((e) => e.id == action.payload.id),
        1
      );

      state.items = [...filtred];
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectItems = (state) => state.cart.items;

export default cartSlice.reducer;
