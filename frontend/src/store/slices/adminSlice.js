import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    setAdminAuthentication(state, action) {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setAdminAuthentication } = adminSlice.actions;
export default adminSlice.reducer;
