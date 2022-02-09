import React from "react";
import "./film.css";

// Find a way to send url link through SMS

const FilmHeader = ({ title, image, tagline, background }) => {
  /* <img
                src={`https://image.tmdb.org/t/p/original${image}`}
                alt={title}
                className="film-header-image"
              /> */

  return (
    <div className="container-fluid">
      {/* <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${background})`,
        }}
        className="film-header"
      >
        <div className="film-header-overlay">
          <div className="film-header-content">
            <img
              src={`https://image.tmdb.org/t/p/w342${image}`}
              alt={title}
              className="film-header-image"
            />
          </div>
        </div>
      </div> */}
      <div className="row my-3">
        <div className="col-10 col-sm-8 w-100">
          <img
            src={`https://image.tmdb.org/t/p/original${image}`}
            alt={title}
            className="film-header-image mx-auto"
          />
        </div>
        <div className="col-10 col-sm-4"></div>
      </div>
    </div>
  );
};

export default FilmHeader;
