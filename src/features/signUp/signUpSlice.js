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
  reducers: {
    setSignUpEmail: (state, action) => {
      state.signUpEmail = action.payload;
    },
    handleSignUp: (state, action) => {
      state.signUpEmail = state.signUpEmail;
    },
    setSignUpPassword: (state, action) => {
      state.signUpPassword = action.payload;
    },
    handleSubmitPassword: (state, action) => {
      state.newUser.email = state.signUpEmail;
      state.newUser.password = state.signUpPassword;
      state.users = [...state.users, state.newUser];
      state.signUpEmail = "";
      state.signUpPassword = "";
      state.isSignUp = true;
    },
    signOut: (state, action) => {
      state.isSignUp = false;
    },
  },
});

export const {
  setSignUpEmail,
  handleSignUp,
  setSignUpPassword,
  handleSubmitPassword,
  signOut,
} = signUpSlice.actions;

export default signUpSlice.reducer;
