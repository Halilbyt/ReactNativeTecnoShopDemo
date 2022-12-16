import { createSlice } from "@reduxjs/toolkit";
import { DATA } from "./localDummyData/ProductData";

const productSlc = createSlice({
  name: "products",
  initialState: {
    AllProductsData: [...DATA],
  },
  reducers: {
    addProduct: (state, action) => {
      state.AllProductsData.push({
        id: Math.round(Math.random() * 5 + 1),
        catId: action.payload.catId,
        description: action.payload.description,
        price: "$" + action.payload.price,
        imgUrl: action.payload.imgUrl,
      });
    },
    removeProduct: (state, action) => {
      state.AllProductsData = state.AllProductsData.filter((product) => {
        return product.id !== action.payload.id;
      });
    },
    updateProduct: (state, action) => {
      state.AllProductsData.map((product) => {
        if (product.id === action.payload.id) {
          product.id = action.payload.id;
          product.title = action.payload.title;
          product.price = action.payload.price;
          product.description = action.payload.description;
          product.imgUrl = action.payload.imgUrl;
        }
      });
    },
  },
});

export default productSlc.reducer;
export const { addProduct, removeProduct, updateProduct } = productSlc.actions;
