import React from "react";
import { Link } from "react-router-dom";

const ExtraScroller = ({ title, films, filmType }) => {
  console.log(filmType);
  return (
    <div>
      <h4 className="container">{title}</h4>
      <div className="extra-scroller">
        <nav className="nav d-flex justify-content-between">
          {films.results.map((film) => {
            return (
              <div key={film.id}>
                <Link
                  to={`/${filmType}/${film.id}`}
                  className="poster-link-reset mx-1 d-block"
                >
                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/w154${film.poster_path}`}
                      alt={film.title}
                      className="tmdb-film-image"
                    />
                  </div>
                  <h6 className="mb-0 mt-2 text-dark">
                    {film.title || film.name}
                  </h6>
                  <small>
                    <i className="fas fa-star text-warning" />{" "}
                    {film.vote_average}{" "}
                    <span className="text-muted">
                      ({film.vote_count} votes)
                    </span>
                  </small>
                </Link>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default ExtraScroller;
