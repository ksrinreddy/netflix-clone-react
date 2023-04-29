import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSignUp: false,
  signUpEmail: "",
  signUpPassword: "",
  newUser: {
    email: "",
    password: "",
  },
  users: [],
};

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
});

export default signUpSlice.reducer;
