import PropTypes from 'prop-types';
import style from './Post.module.css';
import Photo from './Photo';
import Content from './Content';
import Rating from './Rating';
import Date from './Date';
import {ReactComponent as DeleteIcon} from './img/delete.svg';

export const Post = ({postData}) => {
  const {
    thumbnail,
    title,
    author,
    ups,
    created: date,
    id,
  } = postData;

  return (
    <li className={style.post}>
      <Photo title={title} thumbnail={thumbnail} />
      <Content title={title} author={author} id={id}/>
      <button className={style.delete}>
        <DeleteIcon width={24} height={24} />
      </button>
      <Rating ups={ups} />
      <Date date={date} />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
