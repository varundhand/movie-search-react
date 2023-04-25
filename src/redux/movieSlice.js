import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const API_KEY = "4f7285dc";

const initialState = {
  //! to select this state we use useSelector Hook
  searchTerm: "",
  isLoading: false,
  error: null,
  movies: [],
  totalResults: null,
  foundMovies: null,
  favouriteMovies: [],
  isModalOpen: false,
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
    const response = await axios.post(`http://localhost:5000/movies`, payload); // payload is the whole object
    return response.data;
  }
);

export const removeFavouriteMovie = createAsyncThunk(
  "movie/removeFavouriteMovie",
  async (payload, thunkAPI) => {
    const response = await axios.delete(
      `http://localhost:5000/movies/${payload}`
    );
    return "movie removed from fav movies";
  }
);

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    // Actions are defined here //! to access these Actions in reducers we use useDispatch Hook
    setMovie: (state, action) => {
      state.searchTerm = action.payload;
      // state.push(action.payload);
    },
    setModal: (state, action) => {
      state.isModalOpen = action.payload;
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
export const { setMovie, setModal } = movieSlice.actions;

export default movieSlice.reducer;
