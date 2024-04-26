import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import adminSlice from "./slices/adminSlice";
import authSlice from "./slices/authslice";
import authApi from "./apis/authapi";
import productApi from "./apis/adminapis/productsApi";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    auth: authSlice,
    admin: adminSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(productApi.middleware);
  },
});

export * from "./slices/authslice";
export * from "./apis/authapi";
export * from "./apis/adminapis/productsApi";
export * from "./slices/adminSlice";
setupListeners(store.dispatch);

export default store;
