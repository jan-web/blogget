import style from './Comments.module.css';
import {Text} from '../../../../../UI/Text';
import Date from '../Date';
import PropTypes from 'prop-types';

export const Comments = ({date, comments}) => {
  return (
    <ul className={style.list}>
      {
        comments.length ? (
        comments.map(
          item =>
            item.body && (
              <li className={style.item} key={item.id}>
                <Text className={style.author} As="h3" size={18} tsize={22}>
                  {item.author}
                </Text>
                <Text className={style.comment} As="p" size={14} tsize={18}>
                  {item.body}
                </Text>
                <Date date={date} />
              </li>
            ),
        )
      ) : (
        <>
          <p>Нет комментариев</p>
          {/* <p>{comments[0].body}</p> */}
        </>
      )}
    </ul>
  );
};

Comments.propTypes = {
  date: PropTypes.string,
  comments: PropTypes.array,
};
