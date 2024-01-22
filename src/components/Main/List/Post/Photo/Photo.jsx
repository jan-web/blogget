import PropTypes from 'prop-types';
import style from './Photo.module.css';
import notphoto from '../img/notphoto.jpg';

export const Photo = ({title, thumbnail}) => {
  return (
    <img
      className={style.img}
      src={thumbnail.length > 7 ? thumbnail : notphoto}
      alt={title}
    />
  );
};

Photo.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
};
