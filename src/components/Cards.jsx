import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as HeartSvg } from "../../public/heart.svg";

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
      {movies.map(({ Poster, Title, Type, Year, imdbID }) => {
        return (
          <div className="card" style={{ width: "11rem" }} key={imdbID}>
            <img src={Poster} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{Title}</h5>
              <p className="card-text">{Year}</p>
              <p className="d-flex justify-content-center cursor-pointer">
                <HeartSvg />
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
