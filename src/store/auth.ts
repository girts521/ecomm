import { createSlice } from "@reduxjs/toolkit";
import { initialAuthStateType } from "../types";

const initialAuthState: initialAuthStateType = {
  isLoggedIn: false,
  user: {
    id: "",
    firstName: "",
    email: "",
    lastName: "",
    isAdmin: false,
    cart: [],
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
