import Div100vh from "react-div-100vh";
import "react-spring-bottom-sheet/dist/style.css";
import { BottomSheet } from "react-spring-bottom-sheet";
import { Link } from "react-router-dom";
import SearchModal from "./SearchModal";
import "../styles/App.css";

const Layout = ({
  hideNav,
  component,
  bottomSheet,
  toggleBottomSheet,
  isSearchMenuOpen,
  toggleSearchMenu,
}) => {
  return (
    <>
      <SearchModal
        isSearchMenuOpen={isSearchMenuOpen}
        toggleSearchMenu={toggleSearchMenu}
      />
      <Div100vh>
        <nav className={`navbar border-bottom py-1`}>
          {hideNav ? (
            <div className="container-fluid">
              <Link to="/home">
                <i className="fas fa-chevron-left fa-lg py-2 back-icon" />
              </Link>
            </div>
          ) : (
            <div className="container-fluid">
              <a
                className="gradient-text navbar-brand"
                style={{ letterSpacing: "2px" }}
                href="/home"
              >
                Filmtracker
              </a>
              <div className="d-sm-none d-flex">
                <i
                  className="fas fa-search text-darkcyan"
                  onClick={() => toggleSearchMenu()}
                />
              </div>
              <div className="d-none d-md-flex justify-content-between align-items-center icons-md nav">
                <a
                  className="mx-1 p-2 rounded-circle text-center "
                  href="/home"
                >
                  <i className="fas fa-home " />
                </a>
                <a
                  className=" mx-1 p-2 rounded-circle text-center"
                  href="/lists"
                >
                  <i className="fas fa-stream" />
                </a>
                <a
                  className="mx-1 p-2 rounded-circle text-center "
                  href="/messages"
                >
                  <i className="fas fa-envelope-open" />
                </a>
                <a
                  className="mx-1 p-2 rounded-circle text-center"
                  href="/:username"
                >
                  <i className="fas fa-user" />
                </a>
              </div>
            </div>
          )}
        </nav>
        <main style={{ paddingBottom: "80px" }}>{component}</main>
        <footer
          className={
            bottomSheet.item || isSearchMenuOpen
              ? "d-none"
              : "fixed-bottom border-top d-sm-none"
          }
        >
          <nav className="nav nav-pills nav-fill text-muted bg-light icons">
            <a className="nav-link text-center nav-link" href="/home">
              <i className="fas fa-home fa-lg " />
              <span>Home</span>
            </a>
            <a className="nav-link text-center nav-link" href="/lists">
              <i className="fas fa-stream fa-lg " />
              <span>Lists</span>
            </a>
            <a className="nav-link text-center nav-link" href="/messages">
              <i className="fas fa-envelope-open fa-lg" />
              <span>Messages</span>
            </a>
            <a className="nav-link text-center nav-link" href="/:username">
              <i className="fas fa-user fa-lg" />
              <span className="caption">Me</span>
            </a>
          </nav>
        </footer>
      </Div100vh>
      {bottomSheet.item && (
        <BottomSheet open={bottomSheet.opened} className="text-center">
          <img
            src={`https://image.tmdb.org/t/p/w300${bottomSheet.item.backdrop_path}`}
            alt={bottomSheet.item.title}
            className="tmdb-film-image"
          />
          <h5 className="my-2">
            {bottomSheet.item.title || bottomSheet.item.name}
          </h5>

          <small className="container m-3">{bottomSheet.item.overview}</small>
          <ul className="nav nav-pills nav-justified mt-3">
            <li className="nav-item">
              <i
                className="far fa-bookmark fa-lg p-2"
                style={{ color: "darkcyan" }}
              />
              <br />
              <h6>Watch Later</h6>
            </li>
            <li className="nav-item">
              <i
                className="fas fa-layer-group fa-lg p-2"
                style={{ color: "darkcyan" }}
              />
              <br />
              <h6>Watched</h6>
            </li>
            <li className="nav-item">
              <i
                className="fas fa-share-square fa-lg p-2"
                style={{ color: "darkcyan" }}
              />
              <br />
              <h6>Recommend</h6>
            </li>
          </ul>
          <button
            className="btn bg-light rounded-lg w-75 bottom-sheet-button"
            onClick={(e) => toggleBottomSheet(e, !bottomSheet.item)}
          >
            Cancel
          </button>
        </BottomSheet>
      )}
    </>
  );
};

export default Layout;
