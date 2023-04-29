import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Movie = ({ movie }) => {
  const { isLike } = useSelector((store) => store.movies);
  return (
    <div className="movie__wrapper">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={movie?.title}
        className="movie__img"
      />
      <div className="movie__overlay">
        <p className="movie__desc">{movie?.title}</p>
        <button className="movie__like-btn">
          {isLike ? (
            <FaHeart className="movie__like-icon" />
          ) : (
            <FaRegHeart className="movie__like-icon" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Movie;
