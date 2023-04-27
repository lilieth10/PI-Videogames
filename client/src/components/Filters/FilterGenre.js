import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getGenre, filterGenre } from "../../actions/genre/genre.action";
import { getVideogames } from "../../actions/videogames/videogames.action";

const FilterGenres = ({ getGenres, filterGenre, genres }) => {
    useEffect(() => {
        getGenres();
    }, [getGenres])

    const handleTypes = (e) => {
        e.preventDefault();
        filterGenre(e.target.value)
    }

    return (
        <>
          <select onChange={(e) => handleTypes(e)}>
            <option hidden value="">
              Genres
            </option>
            {genres?.map((element) => (
              <option key={element.name} value={element.name}>
                {element.name}
              </option>
            ))}
          </select>
        </>
      );
    };

export const mapStateToProps = (state) => {
    return {
      genres: state.genres,
      videogames: state.videogames
    };
  };

export const mapDispatchToProps = (dispatch) => {
    return {
      filterGenre: (payload) => dispatch(filterGenre(payload)),
      getGenres: () => dispatch(getGenre()),
      videogames: () => dispatch(getVideogames())
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(FilterGenres);