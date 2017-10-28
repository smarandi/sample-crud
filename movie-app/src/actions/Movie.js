
const MovieActionTypes = {
  ADD_MOVIE: 'ListMovies/ADD_MOVIE',
  UPDATE_MOVIE_NAME: 'AddMovie/UPDATE_MOVIE_NAME',
  UPDATE_MOVIE_GENRE: 'AddMovie/UPDATE_MOVIE_GENRE',
  UPDATE_MOVIE_DIRECTOR: 'AddMovie/UPDATE_MOVIE_DIRECTOR',
  UPDATE_FAVORITE_STATUS: 'AddMovie/UPDATE_FAVORITE_STATUS',
  SAVE_NEW_MOVIE: 'AddMovie/SAVE_NEW_MOVIE',
  RESET_FORM: 'AddMovie/RESET_FORM',
  DELETE_MOVIE: 'ListMovies/DELETE_MOVIE',
  PREFILL_UPDATE: 'Update/PREFILL_UPDATE',
  UPDATE_MOVIE_DETAILS: 'Update/UPDATE_MOVIE_DETAILS',
};

const MovieActions = {
  
  resetForm: () => ({ type: MovieActionTypes.RESET_FORM }),
  
  addMovie: (payload) => ({ type: MovieActionTypes.ADD_MOVIE, payload }),
  
  updateMovieName: (payload) => ({ type: MovieActionTypes.UPDATE_MOVIE_NAME, payload }),
  
  updateMovieGenre: (payload) => ({ type: MovieActionTypes.UPDATE_MOVIE_GENRE, payload }),
  
  updateMovieDirector: (payload) => ({ type: MovieActionTypes.UPDATE_MOVIE_DIRECTOR, payload }),
  
  updateFavoriteStatus: (payload) => ({ type: MovieActionTypes.UPDATE_FAVORITE_STATUS, payload }),
  
  updateNewMovieList: (payload) => ({ type: MovieActionTypes.DELETE_MOVIE, payload }),
  
  prefillUpdateForm: (payload) => ({ type: MovieActionTypes.PREFILL_UPDATE, payload }),
  
  updateMovieDetails: (payload) => ({ type: MovieActionTypes.UPDATE_MOVIE_DETAILS, payload}),
  
  updateMovie: (payload) => (dispatch, getState) => {
    const { movieList } = getState().movie;
    const updatedList = movieList.filter(movie => movie.id !== payload.id);
    updatedList.push(payload);
    dispatch(MovieActions.updateMovieDetails(updatedList));
  },
};

export {
  MovieActionTypes,
  MovieActions,
};