import {useGetBestPosts} from '../../../hooks/useGetBestPosts';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const [bestPostsData] = useGetBestPosts();

  return (
    <ul className={style.list}>
      {bestPostsData.length &&
        bestPostsData.map((post) => (
          <Post key={post.data.id} postData={post.data} />
        ))}
    </ul>
  );
};
