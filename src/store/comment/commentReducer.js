import {UPDATE_COMMENT} from './commentAction';

const initialState = {
  comment: 'Привет Redux',
};

export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        comment: action.comment,
      };

    default:
      return state;
  }
};
