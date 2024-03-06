import style from './Modal.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as CloseIcon} from './img/close.svg';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import {useEffect, useRef, useState} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import Comments from '../Main/List/Post/Comments';
import FormComment from '../Main/List/Post/FormComment';
import {Text} from '../../UI/Text';
import Preloader from '../../UI/Preloader';
import {useNavigate, useParams} from 'react-router-dom';

export const Modal = () => {
  const {id, page} = useParams();
  const navigate = useNavigate();
  const overlayRef = useRef(null);
  const [postAndComments, status] = useCommentsData(id);

  const [isFormVisible, setIsFormVisible] = useState(false);
  let title = 'title загрузка...';
  let author = 'author загрузка...';
  let markdown = 'markdown загрузка...';
  let date = '';
  let comments = [];
  if (postAndComments.length > 0) {
    title = postAndComments[0]?.title;
    author = postAndComments[0]?.author;
    markdown = postAndComments[0]?.selftext;
    date = postAndComments[0]?.created;
    comments = postAndComments[1];
  }

  const handleClick = e => {
    const target = e.target;
    if (e.code === 'Escape' || target === overlayRef.current) {
      navigate(`/category/${page}`);
    }
  };

  const handleFormVisible = () => {
    setIsFormVisible(!isFormVisible);
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleClick);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {status === 'loading' && <Preloader color={'#cc6633'} size={200} />}
        {status === 'error' && 'Ошибка'}
        {status === 'loaded' && (
          <>
            <h2 className={style.title}>{title}</h2>
            <div className={style.content}>
              <Markdown
                options={{
                  overrides: {
                    a: {
                      props: {
                        target: '_blank',
                      },
                    },
                  },
                }}>
                {markdown}
              </Markdown>
            </div>
            <Text className={style.author} As="p">
              {author}
            </Text>
            {isFormVisible && <FormComment onSubmitForm={handleFormVisible} />}
            {!isFormVisible && (
              <button onClick={handleFormVisible}>Написать комментарий</button>
            )}
            <Comments date={date} comments={comments} />
            <button className={style.close}>
              <CloseIcon
                onClick={() => {
                  navigate(`/category/${page}`);
                }}
              />
            </button>
          </>
        )}
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

Modal.propTypes = {
  id: PropTypes.string,
  closeModal: PropTypes.func,
};
