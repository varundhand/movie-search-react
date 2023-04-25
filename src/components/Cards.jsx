import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";

const Cards = () => {
  const movies = useSelector((state) => state.movie.movies);
  // const foundMovies = useSelector(state => state.movie.foundMovies)
  const isLoading = useSelector((state) => state.movie.isLoading);
  const error = useSelector((state) => state.movie.error);
  const favouriteMovies = useSelector((state) => state.movie.favouriteMovies);

  // console.log( favouriteMovies.length);

  if (isLoading) {
    return "loading...";
  }

  if (error) {
    return error;
  }

  const checkSelected = (id) => {
    return favouriteMovies?.find((movieObj) => movieObj.imdbID === id); // ?. CHECKS WHETHER THE VALUE EXISTS BEFORE ACCESSING IT and if no value, then throws undefined instead of an error
  };

  // movies.forEach(({Poster,Title,Type,Year,imdbID}) => {
  return (
    <div style={{ display: "flex" }}>
      {movies.map(({ Poster, Title, Year, imdbID, Type }) => {
        console.log({ imdbID });

        // Check if current cardId exists in our favourite movies array
        const favouriteMovie = checkSelected(imdbID);

        return (
          <Card
            poster={Poster}
            title={Title}
            year={Year}
            imdbID={imdbID}
            key={imdbID}
            type={Type}
            isFavourite={favouriteMovie ? true : false}
          />
        );
      })}
    </div>
  );
};

export default Cards;
