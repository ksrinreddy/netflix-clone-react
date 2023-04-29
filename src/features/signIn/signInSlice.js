import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSignIn: false,
  user: {
    email: "",
    password: "",
  },
};

const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    setUserEmail: (state, action) => {
      state.user.email = action.payload;
    },
    setUserPassword: (state, action) => {
      state.user.password = action.payload;
    },
    handleSignIn: (state, action) => {
      const userEmail = state.user.email;
      const userPassword = state.user.password;
      state.isSignIn = true;
      state.user.email = userEmail;
      state.user.password = userPassword;
    },

    logOut: (state, action) => {
      state.isSignIn = false;
      state.user.email = "";
      state.user.password = "";
    },
  },
});

export const { setUserEmail, setUserPassword, handleSignIn, logOut } =
  signInSlice.actions;

export default signInSlice.reducer;
