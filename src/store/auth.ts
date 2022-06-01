import { createSlice } from '@reduxjs/toolkit';

type initialAuthStateType = {
    isLoggedIn: boolean;
    user: {
      id: string;
      firstName: string;
      email: string;
      lastName: string;
      isAdmin: boolean;
      cart: string[]
    }
}

const initialAuthState: initialAuthStateType  = {
    isLoggedIn: false,
    user: {
      id: '',
      firstName: '',
      email: '',
      lastName: '',
      isAdmin: false,
      cart: []
    }
  };
  
  const authSlice = createSlice({
    name: 'auth',
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

 