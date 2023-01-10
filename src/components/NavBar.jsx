import React from "react";

function NavBar() {
  return (
    <>
      <nav className="navbar sticky-top">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Pokemon"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
