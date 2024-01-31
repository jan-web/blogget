import {URL_API} from '../../api/const';
import axios from 'axios';

export const GET_BESTPOSTS_REQUEST = 'GET_BESTPOSTS_REQUEST';
export const GET_BESTPOSTS_SUCCESS = 'GET_BESTPOSTS_SUCCESS';
export const GET_BESTPOSTS_ERROR = 'GET_BESTPOSTS_ERROR';

export const getBestPostsRequest = () => ({
  type: GET_BESTPOSTS_REQUEST,
  error: '',
});
export const getBestPostsSuccess = data => ({
  type: GET_BESTPOSTS_SUCCESS,
  data,
});
export const getBestPostsError = error => ({
  type: GET_BESTPOSTS_ERROR,
  error,
});

export const getBestPostsAsync = () => (dispatch, getState) => {
  const token = getState().token.token;
  if (!token) return;
  dispatch(getBestPostsRequest());

  axios(`${URL_API}/best?limit=20`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({data: {data}}) => {
      dispatch(getBestPostsSuccess(data.children));
    })
    .catch(err => {
      console.log(err);
      dispatch(getBestPostsError(err.toString()));
    });
};
