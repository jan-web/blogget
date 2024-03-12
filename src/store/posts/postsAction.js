import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {URL_API} from '../../api/const';

export const postRequestAsync = createAsyncThunk(
  'post/fetch',
  (newPage, {getState}) => {
    const page = newPage || getState().posts.page;
    const token = getState().token.token;
    const after = getState().posts.after;
    const isLast = getState().posts.isLast;
    if (!token || isLast) return;

    return axios(
      `${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      },
    )
      .then(({data}) => {
        return data.data;
      })
      .catch(err => ({error: err}));
  },
);
