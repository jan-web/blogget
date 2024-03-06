import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCommentsDataAsync} from '../store/comments/action';

export const useCommentsData = id => {
  const status = useSelector(state => state.getCommentsData.status);
  const postAndComments = useSelector(state => state.getCommentsData.data);
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsDataAsync(id));
  }, [token, id]);

  return [postAndComments, status];
};
