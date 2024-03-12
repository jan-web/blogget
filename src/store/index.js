// import {composeWithDevTools} from '@redux-devtools/extension';
// import {
//   applyMiddleware,
//   combineReducers,
//   legacy_createStore as legacyCreateStore,
// } from 'redux';
// import {thunk} from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';
import {authReducer} from './auth/authReducer';
import {commentReducer} from './comment/commentReducer';
// import {getBestPostsReducer} from './posts/postReducer';
import postsReducer from './posts/postsSlice';
import {tokenMiddleware, tokenReducer} from './token/tokenReducer';
import commentsReducer from './comments/commentsSlice';

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
