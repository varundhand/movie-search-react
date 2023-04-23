import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, setMovie } from "../redux/movieSlice";
import { useEffect } from "react";

const Searchbar = () => {
  const dispatch = useDispatch();
  
  // movie, isloading and error selectors
  // store.{sliceName}.{propertyName}
  const searchTerm = useSelector((state) => state.movie.searchTerm);
  
  // e.target.value = {target: {value}}
  const handleOnChange = ({ target: { value } }) => {
    dispatch(setMovie(value));
  };

  const handleSearch = () => {
    dispatch(fetchMovies({searchTerm, pageNo: 1})) // by default first page 
  }
  
  //! use cards component for next return 
  
  return (
    <div
      className="input-group rounded d-flex w-25 mx-auto"
      id="input-movie-bar"
    >
      <input
        className="form-control rounded "
        onChange={handleOnChange}
        value={searchTerm}
        id="search-btn"
        placeholder="Enter Movie Name"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <span className="input-group-text border-0 p-0" id="search-addon">
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSearch}
        >
          Search
        </button>
      </span>
    </div>
  );
};

export default Searchbar;
