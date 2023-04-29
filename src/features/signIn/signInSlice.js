import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSignIn: false,
  user: {
    email: "",
    password: "",
  },
};

const singInSlice = createSlice({
  name: "signIn",
  initialState,
});

export default singInSlice.reducer;
