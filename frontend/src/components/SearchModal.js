import React from "react";
import Div100vh from "react-div-100vh";

const SearchModal = ({ isSearchMenuOpen, toggleSearchMenu }) => {
  return (
    <Div100vh
      className={
        isSearchMenuOpen ? "d-block search-overlay prevent-scroll" : "d-none"
      }
    >
      <div className="input-container d-flex justify-content-center align-items-center">
        <i
          className="fa fa-close search-icon"
          onClick={() => toggleSearchMenu()}
          style={{ minWidth: "35px", color: "darkcyan" }}
        />
        <input
          className="input-field"
          type="text"
          placeholder="Search for films...."
          name="usrnm"
        />
        <i
          className="fas fa-chevron-right search-icon"
          style={{ backgroundColor: "darkcyan", color: "white" }}
        />
      </div>
    </Div100vh>
  );
};

export default SearchModal;
