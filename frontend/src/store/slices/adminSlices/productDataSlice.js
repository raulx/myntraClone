import { createSlice } from "@reduxjs/toolkit";

const productDataSlice = createSlice({
  name: "productData",
  initialState: { total: 0, products: [] },
  reducers: {
    setProductData(state, action) {
      state.products = action.payload.products;
      state.total = action.payload.total;
    },
    removeProductById(state, action) {
      const productTobeRemoved = action.payload;
      state.total -= 1;
      state.products = state.products.filter((product) => {
        return product.product_id != productTobeRemoved;
      });
    },
  },
});

export const { setProductData, removeProductById } = productDataSlice.actions;
export default productDataSlice.reducer;
