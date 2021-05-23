import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import TextTruncate from "react-text-truncate";
import ModalVideo from "react-modal-video";
import Grow from "@material-ui/core/Grow";
import movieTrailer from "movie-trailer";
import "./modalVideo.css";

const baseURL = "https://image.tmdb.org/t/p/original/";
function Banner() {
  const [movie, setMovie] = useState([]);
  const [truncline, setTruncLine] = useState(2);
  const [isOpen, setOpen] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");

  const readMore = (e) => {
    setTruncLine(0);
    e.preventDefault();
    e.target.style.display = "none";
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  const getReleaseYear = (date) => {
    let year = new Date(date);
    return year.getFullYear();
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const trailerOnClick = () => {
    handleClick(movie);
    setOpen(true);
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${baseURL}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      {trailerUrl && (
        <Grow in={isOpen} mountOnEnter unmountOnExit>
          <ModalVideo
            channel="youtube"
            isOpen="true"
            videoId={trailerUrl}
            onClose={() => setOpen(false)}
          />
        </Grow>
      )}
      <div className="banner_contents">
        <p className="banner_featured">TODAY'S FEATURED FILM</p>
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
          <span className="banner_featuredYear">
            ({getReleaseYear(movie?.release_date || movie?.first_air_date)})
          </span>
        </h1>
        <div className="banner_buttons">
          <button className="banner_button" onClick={() => trailerOnClick()}>
            <PlayArrowRoundedIcon />
            <span> Play Trailer </span>
          </button>
        </div>
        <TextTruncate
          line={truncline}
          element="p"
          containerClassName="banner_description"
          textTruncateChild={
            <a href="#" onClick={readMore}>
              <small>[more]</small>
            </a>
          }
          truncateText="…"
          text={movie?.overview}
        />
        {/* <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1> */}
      </div>
      <div className="banner_fadeBottom"></div>
    </header>
  );
}

export default Banner;
