import { createSlice } from "@reduxjs/toolkit";
export const auth = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token") || null,
    userId: localStorage.getItem("userId") || null,
    isLoggedIn: localStorage.getItem("token") ? true : false,
  },

  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
      state.isLoggedIn = true;
    },

    setUserId: (state, action) => {
      state.userId = action.payload;
      localStorage.setItem("userId", action.payload);
    },

    logout: (state) => {
      localStorage.clear()
      state.token = null;
      state.userId = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout, setUserId } = auth.actions;
export default auth.reducer;
