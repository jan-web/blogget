import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postRequestAsync } from '../store/posts/postsAction_туц';

export const usePostsData = () => {
  const postsData = useSelector(state => state.posts.posts);
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Запрос из usePostsData');
    dispatch(postRequestAsync());
  }, [token]);

  return [postsData];
};
