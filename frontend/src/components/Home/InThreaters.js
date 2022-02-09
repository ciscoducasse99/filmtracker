import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const InThreaters = ({ films }) => {
  return (
    <section className="home-film-section my-2">
      <h3 className="m-0"> In Threaters Now</h3>
      <small className="text-muted">
        Playing in threaters across the country
      </small>
      <div className="film-scroller py-1">
        <nav className="nav">
          {films.map((film) => {
            return (
              <div key={film.id} className="mx-3 text-left">
                <img
                  src={`https://image.tmdb.org/t/p/original${film.backdrop_path}`}
                  alt={film.title}
                  className="tmdb-film-image"
                  style={{
                    height: "200px",
                    width: "360px",
                  }}
                />
                <h5 className="float-left text-truncate">{film.title}</h5>
              </div>
            );
          })}
        </nav>
      </div>
    </section>
  );
};

export default InThreaters;
