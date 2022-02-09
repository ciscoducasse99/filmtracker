const express = require("express");
const axios = require("axios");
const router = express.Router();
const { checkAuthUser, checkGuestUser } = require("../config/checkAuth");

router.get("/", async (req, res) => {
  try {
    const inThreaters = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_API_KEY}`
    );

    const movies = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`
    );
    const shows = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMDB_API_KEY}`
    );
    const genres = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_API_KEY}`
    );

    const data = {
      inThreaters: inThreaters.data.results,
      movies: movies.data.results,
      shows: shows.data.results,
      genres: genres.data.genres,
    };

    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(err.response.status).send({
      status: err.response.status,
      statusText: err.response.statusText,
      message: err.response.data.status_message,
    });
  }
});

router.get(`/fetchNewMovies`, async (req, res) => {
  try {
    const { type } = req.query;
    let query = "";

    switch (type) {
      case "Top Rated":
        query = "top_rated";
        break;

      case "Popular":
        query = "popular";
        break;
      case "Now Playing":
        query = "now_playing";
        break;
      case "Upcoming":
        query = "upcoming";
        break;
      default:
        null;
    }

    const films = await axios.get(
      `https://api.themoviedb.org/3/movie/${query}?api_key=${process.env.TMDB_API_KEY}`
    );
    res.send(films.data.results);
  } catch (err) {
    res.status(err.response.status).send({
      status: err.response.status,
      statusText: err.response.statusText,
      message: err.response.data.status_message,
    });
  }
});

router.get(`/fetchNewShows`, async (req, res) => {
  try {
    const { type } = req.query;
    let query = "";

    switch (type) {
      case "Top Rated":
        query = "top_rated";
        break;

      case "Popular":
        query = "popular";
        break;
        break;
      case "Now Playing":
        query = "on_the_air";
        break;
      case "Upcoming":
        query = "airing_today";
        break;
      default:
        null;
    }

    const films = await axios.get(
      `https://api.themoviedb.org/3/tv/${query}?api_key=${process.env.TMDB_API_KEY}`
    );
    res.send(films.data.results);
  } catch (err) {
    res.status(err.response.status).send({
      status: err.response.status,
      statusText: err.response.statusText,
      message: err.response.data.status_message,
    });
  }
});

router.get("/fetchFilm", async (req, res) => {
  try {
    const { filmId, filmType } = req.query;

    const film = await axios.get(
      `https://api.themoviedb.org/3/${filmType}/${filmId}?api_key=${process.env.TMDB_API_KEY}`
    );

    const recommendations = await axios.get(
      `https://api.themoviedb.org/3/${filmType}/${filmId}/recommendations?api_key=${process.env.TMDB_API_KEY}`
    );

    const similar = await axios.get(
      `https://api.themoviedb.org/3/${filmType}/${filmId}/similar?api_key=${process.env.TMDB_API_KEY}`
    );

    const reviews = await axios.get(
      `https://api.themoviedb.org/3/${filmType}/${filmId}/reviews?api_key=${process.env.TMDB_API_KEY}`
    );

    const watchProviders = await axios.get(
      `https://api.themoviedb.org/3/${filmType}/${filmId}/watch/providers?api_key=${process.env.TMDB_API_KEY}`
    );

    const cast = await axios.get(
      `https://api.themoviedb.org/3/${filmType}/${filmId}/credits?api_key=${process.env.TMDB_API_KEY}`
    );

    const filmData = {
      film: film.data,
      recommendations: recommendations.data,
      similar: similar.data,
      reviews: reviews.data,
      watchProviders: watchProviders.data.results,
    };

    res.send(filmData);
  } catch (err) {
    res.status(err.response.status || 500).send({
      status: err.response.status || 500,
      statusText: err.response.statusText,
      message: err.response.data.status_message,
    });
  }
});

module.exports = router;
