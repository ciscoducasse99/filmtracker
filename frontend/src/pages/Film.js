import React, { useEffect, useState } from "react";
import axios from "axios";

import Layout from "../components/Layout";
import Loading from "../components/Loading";
import FilmHeader from "../components/Film/FilmHeader";
import ExtraScroller from "../components/Film/ExtraScroller";

const Film = (props) => {
  const [film, setFilm] = useState(null);
  const [recommendations, setRecommendations] = useState(null);
  const [similar, setSimilar] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [watchProviders, setWatchProviders] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState({ error: false, errorMessage: null });
  const [bottomSheet, setBottomSheet] = useState({ opened: false, item: null });

  useEffect(() => {
    const { filmId, filmType } = props.match.params;

    const fetchFilmData = async (filmId, filmType) => {
      try {
        const result = await axios.get(`/api/films/fetchFilm`, {
          params: {
            filmId: filmId,
            filmType: filmType,
          },
        });

        setFilm(result.data.film);
        setRecommendations(result.data.recommendations);
        setSimilar(result.data.similar);
        setReviews(result.data.reviews);
        setWatchProviders(result.data.watchProviders);
        setLoaded(true);
      } catch (err) {
        setError({ error: true, errorMessage: err.message });
      }
    };

    fetchFilmData(filmId, filmType);
    // fix this to cause rerender
  }, [props.match.params]);

  const FilmComponent = (
    <div>
      {film !== null && (
        <>
          <FilmHeader
            background={film.backdrop_path}
            title={film.title || film.name}
            image={film.poster_path}
            tagline={film.tagline}
          />
          {/* <div className="nav-scroller mb-2 justify-content-between">
        <nav className="nav d-flex justify-content-between">{links}</nav>
      </div> */}

          <div>
            <ExtraScroller
              filmType={props.match.params.filmType}
              title={`Films similar to ${film.title || film.name}`}
              films={similar}
            />
            <ExtraScroller
              filmType={props.match.params.filmType}
              title={`Films similar to ${film.title || film.name}`}
              films={recommendations}
            />
          </div>
          <div className="my-5">
            <h6 className="mb-2">Film Data</h6>
            <pre className="pt-3">{JSON.stringify(film, null, 2)}</pre>
          </div>
          <div className="my-5">
            <h6 className="mb-2">Watch Providers Data</h6>
            <pre className="pt-3">
              {JSON.stringify(watchProviders, null, 2)}
            </pre>
          </div>
          <div>
            <h6 className="mb-2">reviews Data</h6>
            <pre className="pt-3">{JSON.stringify(reviews, null, 2)}</pre>
          </div>
        </>
      )}
    </div>
  );

  return error.error === true ? (
    <div>{error.errorMessage}</div>
  ) : (
    <div>
      {loaded === false ? (
        <Loading hideNav={true} />
      ) : (
        <Layout
          component={FilmComponent}
          bottomSheet={bottomSheet}
          hideNav={true}
        />
      )}
    </div>
  );
};

export default Film;
