import "./home.css";

const Banner = () => {
  return (
    <section className="container-fluid mx-1 my-3 home-banner d-none d-md-flex justify-content-center align-items-center">
      <div className="container">
        <div className="mb-5 text-center">
          <h1 className="text-info m-0" style={{ fontSize: "3.75em" }}>
            Welcome to Filmtracker.
          </h1>
          <small className="text-white" style={{ fontSize: "1.74em" }}>
            Keep track of all films you wish to view and have already seen.
          </small>
        </div>
        <input
          type="type"
          className="form-control rounded-pill mx-auto w-75"
          id="search"
          placeholder="Search for films..."
        />
      </div>
    </section>
  );
};

export default Banner;
