import axios from "axios";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const FILTER_NAME = "FILTER_NAME";
export const FILTER_RATING = "FILTER_RATING";
export const FILTER_CREATE = "FILTER_CREATE";
export const POST_VIDEOGAME = "POST_VIDEOGAME";

export const getVideogames = () => {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/videogames");
    return dispatch({
      type: GET_VIDEOGAMES,
      payload: json.data,
    });
  };
};

export const filterName = (payload) => {
  return {
    type: FILTER_NAME,
    payload,
  };
};

export const filterRating = (payload) => {
  return {
    type: FILTER_RATING,
    payload,
  };
};

export const filterCreated = (payload) => {
  return {
    type: FILTER_CREATE,
    payload,
  };
};

export const postVideogame = (payload) => {
  return async function (dispatch) {
    let res = await axios.post("http://localhost:3001/videogames", payload);
    return dispatch({
      type: POST_VIDEOGAME,
      payload: res.data,
    });
  };
};
