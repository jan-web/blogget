import PropTypes from 'prop-types';
import style from './Content.module.css';

export const Content = ({title, author}) => {
  return (
    <div className={style.content}>
      <h2 className={style.title}>
        <a className={style.linkPost} href="#post">
          {title}
        </a>
      </h2>
      <a className={style.linkAuthor} href="#author">
        {author}
      </a>
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};
