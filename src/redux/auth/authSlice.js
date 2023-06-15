import {
    fetchCurrentUser,
    logInUser,
    logOutUser,
    registerUser,
  } from './authThunk';
  
  const { createSlice } = require('@reduxjs/toolkit');
  const { authInitialState } = require('./authInitialState');
  
  const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    extraReducers: builder => {
      builder
        .addCase(registerUser.fulfilled, (state, action) => {
          state.user.items = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        })
        .addCase(logInUser.fulfilled, (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        })
        .addCase(logOutUser.fulfilled, (state, action) => {
          state.user = {
            name: null,
            email: null,
          };
          state.token = null;
          state.isLoggedIn = false;
        })
        .addCase(fetchCurrentUser.fulfilled, (state, action) => {
          state.user = action.payload;
          state.isLoggedIn = true;
        });
    },
  });
  
  export const authReducer = authSlice.reducer;