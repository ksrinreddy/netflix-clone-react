import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";

const Row = ({ rowID, title, fetchUrl }) => {
  const [rowMovies, setRowMovies] = useState([]);

  const getMovies = async () => {
    const response = await axios.get(fetchUrl);
    const specificMovies = response.data.results;
    setRowMovies(specificMovies);
    return specificMovies;
  };

  useEffect(() => {
    getMovies();
  }, [fetchUrl]);
  return (
    <section className="movies-row">
      <h4 className="movies-row__title">{title}</h4>
      <div className="movies-row__wrapper">
        {rowMovies?.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </section>
  );
};

export default Row;
