import {
  GET_COMMENTS_DATA_REQUEST,
  GET_COMMENTS_DATA_SUCCESS,
  GET_COMMENTS_DATA_ERROR,
} from './action';

const initialState = {
  status: false,
  data: [],
  error: '',
};

export const getCommentsDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS_DATA_REQUEST:
      return {
        ...state,
        data: [],
        status: 'loading',
      };
    case GET_COMMENTS_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
        status: 'loaded',
      };
    case GET_COMMENTS_DATA_ERROR:
      return {
        ...state,
        status: 'error',
      };

    default:
      return state;
  }
};
