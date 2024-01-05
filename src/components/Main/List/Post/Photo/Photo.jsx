import PropTypes from 'prop-types';
import style from './Photo.module.css';
import notphoto from '../img/notphoto.jpg';

export const Photo = ({title}) => {
  return <img className={style.img} src={notphoto} alt={title} />;
};

Photo.propTypes = {
  title: PropTypes.string,
};
