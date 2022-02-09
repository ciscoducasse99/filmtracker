import { useEffect, useState, useRef } from "react";
import axios from "axios";

import Layout from "../components/Layout";
import Loading from "../components/Loading";
import Banner from "../components/Home/Banner";
import InThreaters from "../components/Home/InThreaters";
import FilmsRow from "../components/Home/FilmsRow";
import HomeScroller from "../components/Home/HomeScroller";

const Home = () => {
  const [inThreaters, setinThreaters] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState({ error: false, errorMessage: "" });
  const [bottomSheet, setBottomSheet] = useState({ opened: false, item: null });
  const [searchMenu, setsearchMenu] = useState(false);
  const [movies, setMovies] = useState({
    filmType: "Popular",
    result: [],
    filmTypeDropdown: false,
    loaded: true,
  });
  const [shows, setShows] = useState({
    filmType: "Popular",
    result: [],
    filmTypeDropdown: false,
    loaded: true,
  });

  const fetchData = useRef(() => {});

  fetchData.current = async () => {
    const result = await axios.get("/api/films");

    setinThreaters(result.data.inThreaters);
    setGenres(result.data.genres);
    setMovies({ ...movies, result: result.data.movies });
    setShows({ ...shows, result: result.data.shows });

    setLoaded(true);
  };

  useEffect(() => {
    try {
      fetchData.current();
    } catch (err) {
      console.log(err);
      setError({ error: true, errorMessage: err.message });
    }
  }, []);

  const toggleDropdown = (sectionName) => {
    if (sectionName === "movies") {
      setMovies({ ...movies, filmTypeDropdown: !movies.filmTypeDropdown });
    } else {
      setShows({ ...shows, filmTypeDropdown: !shows.filmTypeDropdown });
    }
  };

  const toggleBottomSheet = (e, film) => {
    e.preventDefault();
    if (bottomSheet.item === null) {
      setBottomSheet({ opened: true, item: film });
    } else {
      setBottomSheet({ opened: false, item: null });
    }
  };

  const fetchNewFilms = async (section, item) => {
    try {
      if (section === "movies") {
        setMovies({
          ...movies,
          filmTypeDropdown: !movies.filmTypeDropdown,
          loaded: false,
        });

        const result = await axios.get(`/api/films/fetchNewMovies`, {
          params: { type: item },
        });

        setMovies({
          filmTypeDropdown: false,
          loaded: true,
          filmType: item,
          result: result.data,
        });
      } else {
        setShows({
          ...shows,
          filmTypeDropdown: !shows.filmTypeDropdown,
          loaded: false,
        });
        const result = await axios.get(`/api/films/fetchNewShows`, {
          params: { type: item },
        });
        setShows({
          filmTypeDropdown: false,
          loaded: true,
          filmType: item,
          result: result.data,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const toggleSearchMenu = () => {
    setsearchMenu(!searchMenu);
  };

  const HomeComponent = (
    <div className="container-fluid">
      <HomeScroller items={genres} />
      <Banner />

      <div className="mx-1">
        <InThreaters films={inThreaters} />
        <FilmsRow
          toggleDropdown={toggleDropdown}
          section="movies"
          content={movies}
          fetchNewFilms={fetchNewFilms}
          toggleBottomSheet={toggleBottomSheet}
        />
        <FilmsRow
          section="shows"
          content={shows}
          toggleDropdown={toggleDropdown}
          fetchNewFilms={fetchNewFilms}
          toggleBottomSheet={toggleBottomSheet}
        />
      </div>
    </div>
  );

  return error.error === true ? (
    <div>{error.errorMessage}</div>
  ) : (
    <div>
      {loaded === false ? (
        <Loading />
      ) : (
        <Layout
          isSearchMenuOpen={searchMenu}
          toggleSearchMenu={toggleSearchMenu}
          component={HomeComponent}
          loaded={loaded}
          bottomSheet={bottomSheet}
          toggleBottomSheet={toggleBottomSheet}
        />
      )}
    </div>
  );
};

export default Home;
