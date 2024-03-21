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
  const auth = useSelector(state => state.auth.data);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();

  useEffect(() => {
    dispatch(postsSlice.actions.changePage(page));
    dispatch(postRequestAsync());
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          dispatch(postRequestAsync());
        }
      },
      {
        rootMargin: '100px',
      },
    );

    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  return (
    <>
      {!auth.name && <p>Пройдите авторизацию</p>}
      <ul className={style.list}>
        {postsData.length ? (
          postsData.map(post => (
            <Post key={post.data.id} postData={post.data} />
          ))
        ) : (
          auth.name && <Preloader color={'#cc6633'} size={200} />

        )}
        <li ref={endList} className={style.end} />
      </ul>
      <Outlet />
    </>
  );
};
