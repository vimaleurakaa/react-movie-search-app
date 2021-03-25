import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import MovieCard from "../../Components/MovieCard/MovieCard";

import "./MovieDetails.scss";

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const [loader, showLoader] = useState(true);
  const { id } = useParams();
  const ratings = [];
  const recommendedMovies = JSON.parse(localStorage.getItem("recommended"));

  useEffect(() => {
    const url = `https://www.omdbapi.com/?apikey=45f0782a&i=${id}`;
    axios
      .get(url)
      .then((res) => {
        setMovie(res.data);
        showLoader(false);
      })
      .catch((err) => alert("Check your internet connection!", err));
  }, [id]);

  const getRatings = () => {
    let value = parseInt(movie.Ratings[0].Value.split("/")[0]) / 2;
    for (let i = 1; i <= 5; i++) {
      if (i <= value) {
        ratings.push("activeRating");
      } else {
        ratings.push("inactive");
      }
    }
  };

  return (
    <div>
      {loader ? (
        <div className="page_loader">
          <img src="../assets/loader.gif" alt="loader" />
        </div>
      ) : (
        <>
          <section id="banner" className="clearfix">
            {getRatings()}
            <div id="banner_content_wrapper">
              <div id="poster">
                <img
                  src={movie.Poster}
                  alt={`${movie.Poster} Movie Poster`}
                  className="featured_image"
                />
                <img
                  src="../assets/play_button.png"
                  alt="Play Trailer"
                  className="play_button"
                />
              </div>
              <div id="content">
                <h2 className="title">{movie.Title}</h2>
                <div className="ratings">
                  {ratings.map((item, i) => (
                    <FaStar key={i} className={item} />
                  ))}
                </div>
                <span className="rating_value">{movie.Ratings[0].Value}</span>

                <p className="description">{movie.Plot}</p>

                <p className="info">
                  {movie.Country} <span>|</span> {movie.Runtime} <span>|</span>
                  {movie.Genre}
                  <span>|</span> {movie.Released}
                </p>
                <p className="info">{movie.Production}</p>
              </div>
            </div>
          </section>

          {recommendedMovies?.length !== undefined && (
            <div className="container">
              <div className="row">
                <MovieCard
                  title="Recommended movies"
                  data={recommendedMovies}
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MovieDetails;
