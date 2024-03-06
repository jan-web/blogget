import axios from 'axios';
import {URL_API} from '../../api/const';

export const GET_COMMENTS_DATA_REQUEST = 'GET_COMMENTS_DATA';
export const GET_COMMENTS_DATA_ID = 'GET_COMMENTS_ID';
export const GET_COMMENTS_DATA_SUCCESS = 'GET_COMMENTS_SUCCESS';
export const GET_COMMENTS_DATA_ERROR = 'GET_COMMENTS_ERROR';

export const getCommentsDataRequest = () => ({
  type: GET_COMMENTS_DATA_REQUEST,
  error: '',
});
export const getCommentsDataSuccess = data => ({
  type: GET_COMMENTS_DATA_SUCCESS,
  data,
});
export const getCommentsDataError = error => ({
  type: GET_COMMENTS_DATA_ERROR,
  error,
});

export const getCommentsDataAsync = id => (dispatch, getState) => {
  const token = getState().token.token;
  if (!token) return;
  dispatch(getCommentsDataRequest());
  axios(`${URL_API}/comments/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(
      ({
        data: [
          {
            data: {
              children: [{data: post}],
            },
          },
          {
            data: {children},
          },
        ],
      }) => {
        const comments = children.map(item => item.data);
        dispatch(getCommentsDataSuccess([post, comments]));
      },
    )
    .catch(err => {
      console.log(err);
      dispatch(getCommentsDataError(err));
    });
};
