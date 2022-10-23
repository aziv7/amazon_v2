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

//selectors

export const selectItems = (state) => state.cart.items;

export const selectItemsPrice = (state) => {
  let sum = 0;
  for (let a of state.cart.items) {
    sum += a.price;
  }
  return sum;
};

export default cartSlice.reducer;
