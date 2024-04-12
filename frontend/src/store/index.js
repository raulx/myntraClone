import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import adminSlice from "./slices/adminSlice";
import authSlice from "./slices/authslice";
import authApi from "./apis/authapi";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authSlice,
    admin: adminSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(authApi.middleware);
  },
});

export * from "./slices/authslice";
export * from "./apis/authapi";
export * from "./slices/adminSlice";
setupListeners(store.dispatch);

export default store;
