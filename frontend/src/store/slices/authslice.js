import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { message: "hello from frontend" },
  reducers: {
    setMessage(state, action) {
      state.message = action.payload;
    },
  },
});

export const { setMessage } = authSlice.actions;
export default authSlice.reducer;
