import {composeWithDevTools} from '@redux-devtools/extension';
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as legacyCreateStore,
} from 'redux';
import {thunk} from 'redux-thunk';
import {authReducer} from './auth/authReducer';
import {commentReducer} from './comment/commentReducer';
import {getCommentsDataReducer} from './comments/commentsReducer';
import {getBestPostsReducer} from './posts/postReducer';
import {tokenMiddleware, tokenReducer} from './token/tokenReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
  comment: commentReducer,
  auth: authReducer,
  posts: getBestPostsReducer,
  getCommentsData: getCommentsDataReducer,
});

export const store = legacyCreateStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)),
);
