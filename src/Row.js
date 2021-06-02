import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import Rating from "@material-ui/lab/Rating";
import TextTruncate from "react-text-truncate";
import numeral from "numeral";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "450",
    width: "99%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const getReleaseYear = (date) => {
    let year = new Date(date);
    return year.getFullYear();
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="container">
        <div className="row_posters">
          {movies.map((movie) => (
            <div
              class={isLargeRow ? "list__itemLarge" : "list__item"}
              onClick={() => handleClick(movie)}
            >
              <img
                src={`${baseURL}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
              />
              <div className="list__itemInfo">
                <h5 className="list__itemTitle">
                  {movie?.title || movie?.name || movie?.original_name}
                  <span className="list__itemYear">
                    (
                    {getReleaseYear(movie.release_date || movie.first_air_date)}
                    )
                  </span>
                </h5>
                <div className="list__rating">
                  <Rating
                    name="movie-rating"
                    className="movieRating"
                    value={movie.vote_average / 2 || 0}
                    precision={0.5}
                    icon={<StarRoundedIcon fontSize="inherit" readOnly />}
                  />
                  <small className="list__likes">
                    {numeral(movie.vote_average / 2).format("0.0")}
                  </small>
                </div>
              </div>
            </div>
            /* <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={isLargeRow ? "row_posterLarge" : "row_poster"} //{`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          /> */
          ))}
        </div>
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
