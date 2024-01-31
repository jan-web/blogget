import {composeWithDevTools} from '@redux-devtools/extension';
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as legacyCreateStore,
} from 'redux';
import {thunk} from 'redux-thunk';
import {authReducer} from './authReducer/authReducer';
import {commentReducer} from './commentReducer';
import {tokenMiddleware, tokenReducer} from './tokenReducer';
import {getBestPostsReducer} from './getBestPosts/getBestPostsReducer';
import {getCommentsDataReducer} from './getCommentsData/getCommentsDataReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
  comment: commentReducer,
  auth: authReducer,
  getBestPost: getBestPostsReducer,
  getCommentsData: getCommentsDataReducer,
});

export const store = legacyCreateStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)),
);
