import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { nameSearchPokemon } from "../features/pokemons/pokemonsSlice";

function NavBar() {
  const [Search, setSearch] = useState("");
  const dispatch = useDispatch();

  const onchange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      dispatch(nameSearchPokemon(null));
    }
  };

  const onClickSearchPokemon = async (e) => {
    e.preventDefault();
    dispatch(nameSearchPokemon(Search));
  };

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
              value={Search}
              onChange={onchange}
            />
            <button
              className="btn btn-outline-light"
              type="submit"
              onClick={onClickSearchPokemon}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
