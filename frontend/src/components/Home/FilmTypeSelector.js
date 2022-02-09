import React from "react";

const FilmTypeSelector = ({
  section,
  filmType,
  opened,
  toggleDropdown,
  fetchNewFilms,
}) => {
  const listing = [
    {
      class: "dropdown-item",
      name: "Popular",
      icon: "fas fa-fire",
    },
    {
      class: "dropdown-item",
      name: "Now Playing",
      icon: "fas fa-play ",
    },
    {
      class: "dropdown-item",
      name: "Top Rated",
      icon: "fas fa-sort-amount-up-alt",
    },
    {
      class: "dropdown-item",
      name: "Upcoming",
      icon: "far fa-clock",
    },
  ];
  return (
    <div className="dropdown">
      <button
        type="button"
        className="btn btn-outline-dark btn-sm rounded-lg"
        id="dropdownMenuButton"
        onClick={() => toggleDropdown(section)}
      >
        {filmType} {section} <i className="fas fa-chevron-down" />
      </button>
      <div
        className={`dropdown-menu ${opened ? " show" : ""}`}
        aria-labelledby="dropdownMenuButton"
      >
        {listing.map((item, i) => (
          <button
            key={i}
            className={item.class}
            onClick={() => {
              fetchNewFilms(section, item.name);
            }}
          >
            <i className={item.icon} /> {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilmTypeSelector;
