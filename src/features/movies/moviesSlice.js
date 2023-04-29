import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLike: false,
  myShows: [],
  myMovie: {
    id: null,
    title: "",
    img: "",
  },
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
});

export default moviesSlice.reducer;
