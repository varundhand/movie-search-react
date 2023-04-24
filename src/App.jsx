import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Title from "./components/Title";
import Error from "./components/Error";
import Cards from "./components/Cards";
import Pagination from "./components/Pagination";
import { useState, useEffect } from "react";
import { getFavouriteMovies } from "./redux/movieSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  // fetch fav movies on page load
  useEffect(() => {
    dispatch(getFavouriteMovies());
  }, []);

  return (
    <>
      <Navbar />
      <Title />
      <Searchbar />
      {/* <Error/>  */}
      <Cards />
      <Pagination />
    </>
  );
}

export default App;
