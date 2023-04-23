import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //useSelector selects these
  searchTerm: "",
};

// Write thunk fn

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovie: (state, action) => {
      state.searchTerm = action.payload;
      // state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMovie } = movieSlice.actions;

export default movieSlice.reducer;
