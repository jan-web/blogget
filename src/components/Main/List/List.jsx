import generateRandomId from '../../../utils/generateRandomId';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postsData = [
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nickname1',
      ups: 77,
      date: '2022-02-21T04:22:00.000Z',
      id: generateRandomId(),
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nickname2',
      ups: 58,
      date: '2022-02-24T09:45:00.000Z',
      id: generateRandomId(),
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nickname3',
      ups: 24,
      date: '2022-02-24T09:45:00.000Z',
      id: generateRandomId(),
    },
    {
      thumbnail: '',
      title: 'Title4',
      author: 'Nickname4',
      ups: 124,
      date: '2022-02-24T09:45:00.000Z',
      id: generateRandomId(),
    },
  ];

  return (
    <ul className={style.list}>
      {postsData.map((post) => (
        <Post key={post.id} postData={post} />
      ))}
    </ul>
  );
};
