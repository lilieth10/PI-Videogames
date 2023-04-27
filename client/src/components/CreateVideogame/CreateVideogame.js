import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getGenre } from "../../actions/genre/genre.action";
import { postVideogame } from "../../actions/videogames/videogames.action";
import { Link, useHistory } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import s from "./Form.module.css";

const CreateVideogame = ({ getGenres, createVideogame, GENRES }) => {
  useEffect(() => {
    getGenres();
  }, [getGenres]);

  const [newVideogame, setNewVideogame] = useState(false);

  const handleNewVideogame = () => {
    newVideogame ? setNewVideogame(false) : setNewVideogame(true);
  };
  const history = useHistory();
  const [error, setError] = useState({});
  const [input, setInput] = useState({
    name: "",
    background_image: "",
    description: "",
    released: "",
    rating: "",
    platforms: [],
    genres: [],
  });

  const validations = (input) => {
    let error = {};
    if (!input.name) {
      error.name = "name is required";
    }
    if (!input.background_image) {
      error.background_image = "image is required";
    }
    if (!input.description) {
      error.description = "description is required";
    }
    if (!input.platforms) {
      error.platforms = "platforms is required";
    }
    if (!input.genres) {
      error.genres = "genres is required";
    }
    return error;
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      validations({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log(input);
  };

  const handleSelect = (e) => {
    if (input.genres.includes(e.target.value)) {
      alert(`${e.target.value} has already been selected`);
    } else {
      setInput({
        ...input,
        genres: [...input.genres, e.target.value],
      });
      setError(
        validations({
          ...input,
          genres: [...input.genres, e.target.value],
        })
      );
    }
  };

  const handlePlat = (e) => {
    if (input.platforms.includes(e.target.value)) {
      alert(`${e.target.value} has already been selected`);
    } else {
      setInput({
        ...input,
        platforms: [...input.platforms, e.target.value],
      });
      setError(
        validations({
          ...input,
          platforms: [...input.platforms, e.target.value],
        })
      );
    }
  };

  const handleDeletePlatforms = (el) => {
    setInput({
      ...input,
      platforms: input.platforms.filter((e) => e !== el),
    });
  };

  const handleDeleteGenres = (el) => {
    setInput({
      ...input,
      genres: input.genres.filter((e) => e !== el),
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    setError(validations(input));
    createVideogame(input);
    alert("Videogame Creado");
    setInput({
      name: "",
      description: "",
      releaseDate: "",
      background_image: "",
      rating: "",
      platforms: [],
      genres: [],
    });
    history.push("/home");
  }

  const plat = [
    "PC",
    "PlayStation 5",
    "PlayStation 4",
    "Xbox One",
    "Xbox Series S/X",
    "Nintendo Switch",
    "iOS",
    "Android",
    "Nintendo 3DS",
    "Nintendo DS",
    "Nintendo DSi",
    "macOS",
    "Linux",
    "Xbox 360",
    "Xbox",
    "PlayStation 3",
    "PlayStation 2",
    "PlayStation",
    "PS Vita",
    "PSP",
    "Wii U",
    "Wii",
    "GameCube",
    "Nintendo 64",
    "Game Boy Advance",
    "Game Boy Color",
    "Game Boy",
    "SNES",
    "NES",
    "Classic Macintosh",
    "Apple II",
    "Commodore / Amiga",
    "Atari 7800",
    "Atari 5200",
    "Atari 2600",
    "Atari Flashback",
    "Atari 8-bit",
    "Atari ST",
    "Atari Lynx",
    "Atari XEGS",
    "Genesis",
    "SEGA Saturn",
    "SEGA CD",
    "SEGA 32X",
    "SEGA Master System",
    "Dreamcast",
    "3DO",
    "Jaguar",
    "Game Gear",
    "Neo Geo",
    "Web",
  ];

  return (
    <div className={s.imgFondo}>
      <div>
        <NavBar />
      </div>
      <div className={s.containerForm}>
        <h3 className={s.title}>Create your videogame</h3>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label className={s.white}>Name : </label>
            <input
              type="text"
              value={input.name}
              name="name"
              onChange={(e) => handleChange(e)}
              className={s.name}
            />
            {error.name && <p className={s.error}>{error.name}</p>}
          </div>
          <div>
            <label className={s.white}>Image : </label>
            <input
              type="url"
              value={input.background_image}
              name="background_image"
              onChange={(e) => handleChange(e)}
              className={s.image}
            />
            {error.background_image && (
              <p className={s.error}>{error.background_image}</p>
            )}
          </div>
          <div>
            <label className={s.white}>Description : </label>
            <input
              type="text"
              value={input.description}
              name="description"
              onChange={(e) => handleChange(e)}
              className={s.description}
            />
            {error.description && (
              <p className={s.error}>{error.description}</p>
            )}
          </div>
          <div>
            <label className={s.white}>Platforms : </label>
            <select className={s.platforms} onChange={(e) => handlePlat(e)}>
              <option hidden value="">
                Select Platforms
              </option>
              {plat.map((p) => (
                <option key={p} value={p} name="platforms">
                  {p}
                </option>
              ))}
            </select>
            {input.platforms.map((el) => (
              <div>
                <p className={s.list}>{el}</p>
                <button
                  className="botonX"
                  onClick={(e) => handleDeletePlatforms(el)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <div>
            <label className={s.white}>Genres : </label>
            <select className={s.genres} onChange={(e) => handleSelect(e)}>
              <option hidden value="">
                Select Genres
              </option>
              {GENRES &&
                GENRES.length > 0 &&
                GENRES.map((el) => <option value={el.name}>{el.name}</option>)}
            </select>
            {input.genres.map((el) => (
              <div>
                <p className={s.list}>{el}</p>
                <button
                  className="botonX"
                  onClick={(e) => handleDeleteGenres(el)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <div>
            <label className={s.white}>Rating : </label>
            <input
              type="number"
              value={input.rating}
              min="1"
              max="5"
              name="rating"
              onChange={(e) => handleChange(e)}
              className={s.rating}
            />
          </div>
          <div>
            <label className={s.white}>Released : </label>
            <input
              type="date"
              value={input.released}
              name="released"
              onChange={(e) => handleChange(e)}
              className={s.released}
            />
          </div>
          <button
            className={s.create}
            type="submit"
            onClick={handleNewVideogame}
          >
            Crear Videogame
          </button>
          <Link to="/home">
            <button className={s.create}>Home</button>
          </Link>{" "}
        </form>
      </div>
    </div>
  );
};

export const mapStateToProps = (state) => {
  return {
    GENRES: state.genres,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getGenres: () => dispatch(getGenre()),
    createVideogame: (payload) => dispatch(postVideogame(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateVideogame);
