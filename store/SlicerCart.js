import { createSlice } from "@reduxjs/toolkit";

const cartSlicer = createSlice({
  name: "productInCart",
  initialState: {
    productsInCart: [],
  },
  reducers: {
    addCart: (state, action) => {
      state.productsInCart.push(action.payload.itemId);
    },

    removeCart: (state, action) => {
      state.productsInCart.splice(
        state.productsInCart.indexOf(action.payload.itemId),
        1
      );
    },
  },
});

export default cartSlicer.reducer;

export const { addCart, removeCart } = cartSlicer.actions;
