import * as types from '../constants/actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';
import TvShowApi from '../api/tvShowApi';

import {
} from '../utils/dateHelper';

// example of a thunk using the redux-thunk middleware

export function loadShowsSuccess(shows) {
  debugger;
  return { type: types.LOAD_SHOWS_SUCCESS, shows };
}

export function loadShows() {
  debugger;
  return function(dispatch) {
    dispatch(beginAjaxCall())
    return TvShowApi.getAllTvShows().then(shows => {
      dispatch(loadShowsSuccess(shows));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveTvShowSuccess(tvShow) {
  return {type: types.SAVE_TV_SHOW_SUCCESS, tvShow};
}

export function saveTvShow(tvShow) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return TvShowApi.saveTvShow(tvShow).then(tvShow => {
      dispatch(saveTvShowSuccess(tvShow));
    }).catch(error => {
      throw(error);
    });
  };
}
