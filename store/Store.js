import { configureStore } from "@reduxjs/toolkit";
import productSlc from "./SlicerDummyData";
import SlicerCart from "./SlicerCart";

const Store = configureStore({
  reducer: {
    productBank: productSlc,
    productCart: SlicerCart,
  },
});

export default Store;
