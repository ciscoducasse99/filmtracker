import React, { useState, useEffect } from "react";

const Browse = (props) => {
  const [section, setSection] = useState("");
  const [filmType, setFilmType] = useState("");
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const { section, filmType } = props.match.params;
  }, []);

  return <div>Browse</div>;
};

export default Browse;
