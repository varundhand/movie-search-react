import React, { useState } from "react";
import { ReactComponent as HeartSvg } from "../../public/heart.svg";
import { addFavouriteMovie, getFavouriteMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";

const Card = ({ poster, title, year, imdbID, type, isFavourite }) => {
  const dispatch = useDispatch()
  const [isSelected, setIsSelected] = useState(isFavourite);

  const handleLike = (e) => {
    const jsonObj = {
      [imdbID]:{
        "Title": title,
        "Year": year,
        "imdbID": imdbID,
        "Type": type,
        "Poster": poster
      }
    }
    const classArray = Array.from(e.target.classList)
    const isAlreadyLiked = classArray.find((className) => className === "selected");
    
    if (isAlreadyLiked) {
      setIsSelected(false);
    } else {
      setIsSelected(true);
      dispatch(addFavouriteMovie(jsonObj))
    }

  };
  return (
    <div className="card" style={{ width: "11rem" }}>
      <img src={poster} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{year}</p>
        <p className="d-flex justify-content-center cursor-pointer">
          <HeartSvg
            onClick={handleLike}
            className={isSelected ? 'selected': ''}
          />
        </p>
      </div>
    </div>
  );
};

export default Card;
