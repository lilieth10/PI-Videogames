import { GET_VIDEOGAMES, FILTER_NAME, FILTER_RATING, FILTER_CREATE, POST_VIDEOGAME } from "../actions/videogames/videogames.action";
import { SEARCH_VIDEOGAME } from "../actions/videogames/searchVideogames.action";
import { GET_DETAILS, CLEAR_PAGE } from "../actions/details/details.action";
import { GET_GENRE, FILTER_GENRE } from "../actions/genre/genre.action";

const initialState = {
  videogames: [],
  allVg: [],
  details: [],
  genres: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        allVg: action.payload
      };
    case SEARCH_VIDEOGAME:
      return {
        ...state,
        videogames: action.payload,
      };
    case GET_DETAILS:
      return {
        ...state,
        details: action.payload,
      };
    case GET_GENRE:
      return {
        ...state,
        genres: action.payload,
      };
      case FILTER_GENRE:
      return{
        ...state,
        videogames: action.payload
    }
    case FILTER_CREATE:
      const allVideogames = state.allVg
      const orderCreate = action.payload === 'created' ? allVideogames.filter(el => el.createdInDb) : allVideogames.filter(el => !el.createdInDb)
      return{
      ...state,
      videogames: action.payload === 'all' ? allVideogames : orderCreate
      }
    case FILTER_NAME:
      const orderName = 
      action.payload === 'asc' 
      ? state.videogames.sort((a, b) =>(a.name.localeCompare(b.name)))                 
      : state.videogames.sort((a, b) => (b.name.localeCompare(a.name)))
      return{
      ...state,
      videogames: orderName
      }
    case FILTER_RATING:
      const ratingFilter =
      action.payload === 'best' ?
          [...state.videogames].sort((b, a) => a.rating - b.rating)
          :
          [...state.videogames].sort((b, a) => b.rating - a.rating)
      return {
          ...state,
          videogames: ratingFilter
      }         
    case POST_VIDEOGAME:
      return{
        ...state,
        videogames: [...state.videogames, action.payload]
      }
      case CLEAR_PAGE:
      return{
        ...state,
        details: []
      }
    default:
      return state;
  }
}
