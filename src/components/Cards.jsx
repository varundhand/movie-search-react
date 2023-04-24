import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";

const Cards = () => {
  const movies = useSelector((state) => state.movie.movies);
  // const foundMovies = useSelector(state => state.movie.foundMovies)
  const isLoading = useSelector((state) => state.movie.isLoading);
  const error = useSelector((state) => state.movie.error);

  if (isLoading) {
    return "loading...";
  }

  if (error) {
    return error;
  }

  // movies.forEach(({Poster,Title,Type,Year,imdbID}) => {
  return (
    <div style={{ display: "flex" }}>
      {movies.map(({ Poster, Title, Year, imdbID, Type }) => {
        return (
          <Card poster={Poster} title={Title} year={Year} imdbID={imdbID} key={imdbID} type={Type}/>
        )
      })}
    </div>
  );
};

export default Cards;
