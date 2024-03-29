import React from "react";
import style from "./Movie.module.scss";
import { Link, useHistory } from "react-router-dom";

const MovieCard = (props) => {
  let { data, title, bookmark } = props;
  const path = useHistory().location.pathname.split("/")[1];

  return (
    <section id={style.movies_container}>
      <h3>{title}</h3>
      <div className={style.row_grid}>
        {data.map(({ Poster, Title, Type, Year, imdbID }, index) => (
          <Link
            to={
              path !== "movie"
                ? `${process.env.PUBLIC_URL}movie/${imdbID}`
                : `${process.env.PUBLIC_URL}${imdbID}`
            }
            key={index}
          >
            <div className={style.movie_card_container}>
              <div className={style.columnInline}>
                <img className={style.posters} src={Poster} alt={Title}></img>
                <div className={style.cardContent}>
                  <h5>{Title}</h5>
                  <p>
                    {Type} | {Year}
                  </p>
                  <button
                    id="myBtn"
                    onClick={(e) => bookmark(e, imdbID)}
                    className="btn btn-primary"
                  >
                    Bookmark
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MovieCard;
