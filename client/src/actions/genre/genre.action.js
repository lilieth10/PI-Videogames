import axios from "axios";
export const GET_GENRE = "GET_GENRE";
export const FILTER_GENRE = "FILTER_GENRE";

export const getGenre = () => {
  return async function (dispatch) {
    let genre = await axios.get(`http://localhost:3001/genres`);
    return dispatch({
      type: GET_GENRE,
      payload: genre.data,
    });
  };
};

export const filterGenre = (payload) => {
  return async function (dispatch) {
    let videogames = await axios.get(
      `http://localhost:3001/videogames?genre=${payload.toLowerCase()}`
    );
    return dispatch({
      type: FILTER_GENRE,
      payload: videogames.data,
    });
  };
};
