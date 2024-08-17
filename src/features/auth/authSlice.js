import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: undefined,
  admin: undefined,
};

const authSlice = createSlice({
  name: "adminAuth",
  initialState,
  reducers: {
    adminLoggedIn: (state, action) => {
      state.accessToken = 'euibhdcsjj3787327bdu3ytyey3';
      state.admin = true;
    },
    adminLoggedOut: (state) => {
      state.accessToken = undefined;
      state.admin = undefined;
    },
  },
});

export default authSlice.reducer;
export const { adminLoggedIn, adminLoggedOut } = authSlice.actions;
