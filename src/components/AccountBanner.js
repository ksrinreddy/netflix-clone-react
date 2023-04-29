import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "../requests";
import { useCallback } from "react";

const AccountBanner = () => {
  const url = `${requests.requestPopular}`;
  const [popularMovies, setPopularMovies] = useState([]);
  const getPopularMovies = useCallback(async () => {
    try {
      const response = await axios.get(url);
      const popularMovies = response.data.results;
      setPopularMovies(popularMovies);
    } catch (error) {
      console.log(error);
    }
  }, [url]);

  useEffect(() => {
    getPopularMovies();
  }, [url, getPopularMovies]);
  const bannerMovie =
    popularMovies[Math.floor(Math.random() * popularMovies.length)];
  // console.log(bannerMovie);

  return (
    <div className="account-banner">
      <img
        src={`https://image.tmdb.org/t/p/original/${bannerMovie?.backdrop_path}`}
        alt={bannerMovie?.title}
        className="account-banner__img"
      />
      <div className="account-banner__content">
        <div className="account-banner__header">
          <h2 className="account-banner__title">{bannerMovie?.title}</h2>
        </div>
        <div className="account-banner__btn-wrapper">
          <button className="account-banner__btn-play">Play</button>
          <button className="account-banner__btn-watch-later">
            Watch Later
          </button>
        </div>
        <p className="account-banner__movie-date">
          Released <span>{bannerMovie?.release_date}</span>
        </p>
        <p className="account-banner__movie-overview">
          {bannerMovie?.overview.slice(0, 150)}...
        </p>
      </div>
    </div>
  );
};

export default AccountBanner;
