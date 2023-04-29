import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./features/loading/loadingSlice";
import signInReducer from "./features/signIn/signInSlice";

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    signIn: signInReducer,
  },
});

export { store };
