import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "name",
  initialState: {
    status: "checking", // 'authenticated', 'not-authenticated',
    user: {},
    errorMessage: undefined,
  },
  reducers: {
    checking: (state) => {
      state.status = "checking";
      state.user = {};
      state.errorMessage = undefined;
    },
    login: (state, action) => {
      state.status = "authenticated";
      state.user = action.payload;
      state.errorMessage = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const { checking, login } = authSlice.actions;
