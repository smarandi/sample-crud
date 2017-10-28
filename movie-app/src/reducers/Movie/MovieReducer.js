
import { MovieActionTypes} from "../../actions/Movie";

const initialState = {
  movieList: [],
  movieData: {
    id: 0,
    title: '',
    genre: 'action',
    director: '',
    favStatus: false,
  },
  isMovieFieldPristine: true,
};

const addMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case MovieActionTypes.ADD_MOVIE:
      return {
        ...state,
        movieList: [...state.movieList, action.payload],
      };
    case MovieActionTypes.RESET_FORM:
      return {
        ...state,
        movieData: initialState.movieData,
        isMovieFieldPristine: true,
      };
    case MovieActionTypes.UPDATE_MOVIE_NAME:
      return {
        ...state,
        movieData: {
          ...state.movieData,
          title: action.payload,
        },
        isMovieFieldPristine: false,
      };
    case MovieActionTypes.UPDATE_MOVIE_GENRE:
      return {
        ...state,
        movieData: {
          ...state.movieData,
          genre: action.payload,
        }
      };
    case MovieActionTypes.UPDATE_MOVIE_DIRECTOR:
      return {
        ...state,
        movieData: {
          ...state.movieData,
          director: action.payload,
        }
      };
    case MovieActionTypes.UPDATE_FAVORITE_STATUS:
      return {
        ...state,
        movieData: {
          ...state.movieData,
          favStatus: action.payload,
        }
      };
    case MovieActionTypes.DELETE_MOVIE:
      return {
        ...state,
        movieList: action.payload,
      };
    case MovieActionTypes.PREFILL_UPDATE:
      return {
       ...state,
       movieData: action.payload,
       isMovieFieldPristine: true,
      };
    case MovieActionTypes.UPDATE_MOVIE_DETAILS:
      return {
        ...state,
        movieList: action.payload,
      };
    default:
      return state;
  }
};

export default addMovieReducer;