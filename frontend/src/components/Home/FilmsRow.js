import React from "react";
import { Link } from "react-router-dom";
import FilmTypeSelector from "./FilmTypeSelector";
import "./home.css";

const FilmsRow = ({
  section,
  content,
  toggleDropdown,
  fetchNewFilms,
  toggleBottomSheet,
}) => {
  return (
    <section className="home-film-section mb-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <FilmTypeSelector
          opened={content.filmTypeDropdown}
          filmType={content.filmType}
          section={section}
          toggleDropdown={toggleDropdown}
          fetchNewFilms={fetchNewFilms}
        />
        <Link
          to={`/browse/${content.filmType.toLowerCase()}/${section}`}
          className="align-middle"
          style={{ textDecoration: "none", color: "darkcyan" }}
        >
          View more
        </Link>
      </div>
      {content.loaded ? (
        <div className="film-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-between">
            {content.result.map((film) => {
              return (
                <div key={film.id}>
                  <Link
                    to={`/${section === "movies" ? "movie" : "tv"}/${film.id}`}
                    className="poster-link-reset d-block"
                  >
                    <div className="tmdb-film-image-container">
                      <img
                        src={`https://image.tmdb.org/t/p/w185${film.poster_path}`}
                        alt={film.title}
                        // style={{ margin: "0px 7px" }}
                        className="tmdb-film-image"
                      />
                      <div className="overlay d-flex align-items-start">
                        <i
                          id="overlay-icon"
                          className="fas fa-ellipsis-v overlay-icon"
                          onClick={(e) => {
                            toggleBottomSheet(e, film);
                          }}
                        />
                      </div>
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
      ) : (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "351px" }}
        >
          <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default FilmsRow;
