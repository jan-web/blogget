import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Preloader from '../../../UI/Preloader';
import {postRequestAsync} from '../../../store/posts/postsAction';
import style from './List.module.css';
import Post from './Post';
import {Outlet, useParams} from 'react-router-dom';
import {postsSlice} from '../../../store/posts/postsSlice';

export const List = () => {
  const postsData = useSelector(state => state.posts.posts);
  const isLoading = useSelector(state => state.posts.loading);
  const isLast = useSelector(state => state.posts.isLast);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();
  const after = useSelector(state => state.posts.after);

  useEffect(() => {
    dispatch(postsSlice.actions.changePage(page));
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          if (!isLoading && !isLast) {
            console.log(
              'after внутри компонента List получаемый из postSlice: ',
              after,
            );
            dispatch(postRequestAsync());
          }
        }
      },
      {
        rootMargin: '100px',
      },
    );

    setTimeout(() => {
      observer.observe(endList.current);
    }, 500);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, []);

  return (
    <>
      <ul className={style.list}>
        {postsData.length ? (
          postsData.map(post => (
            <Post key={post.data.id} postData={post.data} />
          ))
        ) : (
          <Preloader color={'#cc6633'} size={200} />
        )}
        <li ref={endList} className={style.end} />
      </ul>
      <Outlet />
    </>
  );
};
