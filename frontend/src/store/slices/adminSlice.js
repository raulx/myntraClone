import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    isAuthenticated: localStorage.getItem("_ad") || false,
  },
  reducers: {
    setAdminAuthenticated(state, action) {
      localStorage.setItem("_ad", JSON.stringify({ _ad: action.payload }));
      state.isAuthenticated = true;
    },
    removeAdminAuthenticated(state) {
      localStorage.removeItem("_ad");
      state.isAuthenticated = false;
    },
  },
});

export const { setAdminAuthenticated, removeAdminAuthenticated } =
  adminSlice.actions;
export default adminSlice.reducer;
