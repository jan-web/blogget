import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postsRequestAsync} from '../store/posts/postsAction';

export const usePostsData = () => {
  const postsData = useSelector(state => state.posts.posts);
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsRequestAsync());
  }, [token]);

  return [postsData];
};
