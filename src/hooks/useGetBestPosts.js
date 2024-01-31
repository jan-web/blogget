import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
/* eslint-disable */
import {getBestPostsAsync} from '../store/getBestPosts/getBestPostsReducerActions';

export const useGetBestPosts = () => {
  const bestPosts = useSelector(state => state.getBestPost.data);
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBestPostsAsync());
  }, [token]);

  return [bestPosts];
};
