import { createSlice } from '@reduxjs/toolkit';

type AuthState = {
    isLoggedIn: boolean;
    user: {
      id: string;
      name: string;
      email: string;
      surname: string;
      isAdmin: boolean;
    }
}

const initialAuthState: AuthState  = {
    isLoggedIn: false,
    user: {
      id: '',
      name: '',
      email: '',
      surname: '',
      isAdmin: false
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

 