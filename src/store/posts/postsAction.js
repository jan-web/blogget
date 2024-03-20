import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {URL_API} from '../../api/const';
import {v4 as uuidv4} from 'uuid';

export const postRequestAsync = createAsyncThunk(
  'post/fetch',
  (newPage, {getState}) => {
    const page = newPage || getState().posts.page;
    const token = getState().token.token;
    const after = getState().posts.after;
    const oldPosts = getState().posts.posts;

    const isLast = getState().posts.isLast;
    if (!token || isLast) return getState().posts;

    return axios(
      `${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      },
    )
      .then(({data}) => {
        let newPosts = data.data.children.map(el => ({
          ...el,
          data: {
            ...el.data,
            id: uuidv4(),
          },
        }));

        if (after) {
          newPosts = [...oldPosts, ...data.data.children];
        }
        return {posts: newPosts, after: data.data.after, page};
      })
      .catch(err => ({error: err}));
  },
);
