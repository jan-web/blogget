import {createSlice} from '@reduxjs/toolkit';
import {commentsRequestAsync} from './commentsAction';

const initialState = {
  post: {},
  comments: [],
  status: '',
  error: '',
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder
      .addCase(commentsRequestAsync.pending, state => {
        state.error = null;
        state.status = 'loading';
      })
      .addCase(commentsRequestAsync.fulfilled, (state, action) => {
        state.post = action.payload.post;
        state.comments = action.payload.comments;
        state.error = '';
        state.status = 'loaded';
      })
      .addCase(commentsRequestAsync.rejected, (state, action) => {
        state.error = action.error;
        state.status = 'error';
      });
  },
});

export default commentsSlice.reducer;
