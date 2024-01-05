import formatDate from '../../../../../utils/formateDate';
import style from './Date.module.css';
import PropTypes from 'prop-types';

export const Date = ({date}) => {
  return (
    <time className={style.date} dateTime={formatDate(date)}>
      {formatDate(date)}
    </time>
  );
};

Date.propTypes = {
  date: PropTypes.string,
};
