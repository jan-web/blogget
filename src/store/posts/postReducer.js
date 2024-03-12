import {
  CHANGE_PAGE,
  POST_REQUEST,
  POST_REQUEST_ERROR,
  POST_REQUEST_SUCCESS,
  POST_REQUEST_SUCCESS_AFTER,
} from './postsAction';

const initialState = {
  loading: false,
  posts: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
};

export const getBestPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REQUEST:
      return {
        ...state,
        error: '',
        loading: true,
      };
    case POST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.posts,
        error: '',
        after: action.after,
        isLast: !action.after,
      };
    case POST_REQUEST_SUCCESS_AFTER:
      return {
        ...state,
        loading: false,
        posts: [...state.posts, ...action.posts],
        error: '',
        after: action.after,
      };

    case POST_REQUEST_ERROR:
      return {
        ...state,
        loading: true,
        error: action.error,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.page,
        after: '',
        isLast: false,
      };

    default:
      return state;
  }
};
