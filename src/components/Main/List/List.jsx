import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Preloader from '../../../UI/Preloader';
import {postsRequestAsync} from '../../../store/posts/postsAction';
import style from './List.module.css';
import Post from './Post';
import {Outlet, useParams} from 'react-router-dom';

export const List = () => {
  const postsData = useSelector(state => state.posts.posts);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();

  useEffect(() => {
    dispatch(postsRequestAsync(page));
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          dispatch(postsRequestAsync());
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
