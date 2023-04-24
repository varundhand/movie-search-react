import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const API_KEY = "4f7285dc";

const initialState = {
  //useSelector selects these
  searchTerm: "",
  isLoading: false,
  error: null,
  movies: [],
  totalResults: null,
  foundMovies: null,
  favouriteMovies: [],
};

// Create thunk for posting a new movie to database
// Create thunk for deleteing a movie from database

//! 'payload' is the arugument passed to a redux action
export const fetchMovies = createAsyncThunk(
  "movie/fetchMovies",
  async (payload, thunkAPI) => {
    const { searchTerm, pageNo } = payload;
    // payload is the searchTerm now
    console.log(payload);
    const res = await axios(
      //axios terminates the .json() step
      `https://omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}&page=${pageNo}`
    );
    // console.log(res);
    const data = res.data;
    // console.log(data);
    return data;
  }
);

export const getFavouriteMovies = createAsyncThunk(
  "movie/getFavouriteMovies",
  async (payload, thunkAPI) => {
    const response = await axios.get(`http://localhost:5000/movies`);
    // console.log(response.data);
    return response.data;
  }
);

export const addFavouriteMovie = createAsyncThunk(
  "movie/addFavouriteMovie",
  async (payload, thunkAPI) => {
    const response = await axios.post(`http://localhost:5000/movies`, payload);
    return response.data;
  }
);

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovie: (state, action) => {
      state.searchTerm = action.payload;
      // state.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      const { Response, Search, totalResults } = action.payload;

      state.isLoading = false;
      state.movies = Search;
      state.totalResults = totalResults;
      state.foundMovies = Response;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getFavouriteMovies.fulfilled, (state, action) => {
      state.favouriteMovies = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setMovie } = movieSlice.actions;

export default movieSlice.reducer;
