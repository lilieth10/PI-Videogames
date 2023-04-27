import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getVideogames } from "../../actions/videogames/videogames.action";
import s from "./NavBar.module.css";

export default function NavBar() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getVideogames());
  };

  return (
    <div className={s.bar}>
      <Link className={s.text} onClick={handleClick} to="/home">
        Home
      </Link>
      <Link className={s.text} to="/videogames">
        Create
      </Link>
      <div>{/* <SearchBar /> */}</div>
    </div>
  );
}
