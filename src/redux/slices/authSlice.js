import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload)); // optional: persist user
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token'); // optional, if you're storing a token
    },
  },
});

// Export actions
export const { setUser, logout } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
