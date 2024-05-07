import { createSlice } from "@reduxjs/toolkit";

const productDataSlice = createSlice({
  name: "productData",
  initialState: { total: 0, products: [] },
  reducers: {
    setProductData(state, action) {
      state.products = action.payload.products;
      state.total = action.payload.total;
    },
  },
});

export const { setProductData } = productDataSlice.actions;
export default productDataSlice.reducer;
