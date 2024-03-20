import {configureStore} from '@reduxjs/toolkit';
import {authReducer} from './auth/authReducer';
import {commentReducer} from './comment/commentReducer';
import postsReducer from './posts/postsSlice';
import {tokenMiddleware, tokenReducer} from './token/tokenReducer';
import commentsReducer from './comments/commentsSlice';
// import createSagaMiddleware from 'redux-saga';

// const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    comment: commentReducer,
    auth: authReducer,
    posts: postsReducer,
    comments: commentsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(tokenMiddleware),
});
