import "./home.css";
import { Link } from "react-router-dom";
import ScrollMenu from "react-horizontal-scrolling-menu";

const HomeScroller = ({ items }) => {
  const links = items.map((link) => {
    return (
      <Link
        to={`${link.name.toLowerCase()}/movies`}
        key={link.id}
        className="nav-scroller-link mx-1"
      >
        {link.name}
      </Link>
    );
  });
  return (
    <section className="container my-2 px-0">
      <h5 className="text-bold d-none d-md-block">Browse by category</h5>
      <ScrollMenu
        className="my-2"
        arrowLeft={
          <i className="fas fa-caret-left fa-2x mr-auto text-darkcyan" />
        }
        arrowRight={
          <i className="fas fa-caret-right fa-2x ml-auto text-darkcyan" />
        }
        data={links}
      />
    </section>
  );
};

export default HomeScroller;
