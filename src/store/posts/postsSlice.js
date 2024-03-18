import {createSlice} from '@reduxjs/toolkit';
import {postRequestAsync} from './postsAction';

const initialState = {
  loading: false,
  posts: [],
  error: '',
  after: 'начальное значение after из initialState',
  isLast: false,
  page: '',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
      state.after = '';
      state.isLast = false;
      state.posts = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(postRequestAsync.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(postRequestAsync.fulfilled, (state, action) => {
        console.log('action.payload.after: ', action.payload.after ? action.payload.after : 'отсутствует after');
        state.loading = false;
        state.posts = [...state.posts, ...action.payload.children];
        state.error = '';
        state.after = action.payload.after;
        state.isLast = !action.payload.after;
      })
      .addCase(postRequestAsync.rejected, (state, action) => {
        state.error = action.error;
        state.loading = true;
      });
  },
});

export default postsSlice.reducer;
