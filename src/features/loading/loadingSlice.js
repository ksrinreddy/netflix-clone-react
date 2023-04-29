import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
});

export default loadingSlice.reducer;
