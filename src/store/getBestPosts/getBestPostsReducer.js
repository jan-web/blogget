import {
  GET_BESTPOSTS_ERROR,
  GET_BESTPOSTS_REQUEST,
  GET_BESTPOSTS_SUCCESS,
} from './getBestPostsReducerActions';

const initialState = {
  loading: false,
  data: {},
  error: '',
};

export const getBestPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BESTPOSTS_REQUEST:
      return {
        ...state,
        data: {},
        loading: true,
      };
    case GET_BESTPOSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: '',
      };
    case GET_BESTPOSTS_ERROR:
      return {
        ...state,
        loading: true,
        error: action.error,
      };

    default:
      return state;
  }
};
