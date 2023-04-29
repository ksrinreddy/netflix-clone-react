import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./features/loading/loadingSlice";
import signInReducer from "./features/signIn/signInSlice";
import signUpReducer from "./features/signUp/signUpSlice";
import moviesReducer from "./features/movies/moviesSlice";

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    signIn: signInReducer,
    signUp: signUpReducer,
    movies: moviesReducer,
  },
});

export { store };
