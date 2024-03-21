import PropTypes from 'prop-types';
import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text} from '../../../../../UI/Text';
import {useAuth} from '../../../../../hooks/useAuth.js';
import {updateComment} from '../../../../../store/comment/commentAction.js';
import style from './FormComment.module.css';

export const FormComment = ({onSubmitForm}) => {
  const value = useSelector(state => state.comment.comment);
  const dispatch = useDispatch();

  const [auth] = useAuth();
  const textArea = useRef(null);
  useEffect(() => {
    textArea.current.focus();
  }, []);

  const handleChange = e => {
    dispatch(updateComment(e.target.value));
  };

  const handleOnFormSubmit = e => {
    e.preventDefault();
    onSubmitForm();
  };

  return (
    <form className={style.form} onSubmit={handleOnFormSubmit}>
      <Text As="h3" size={14} tsize={18}>
        {auth.name && auth.name}
      </Text>
      <textarea
        className={style.textarea}
        ref={textArea}
        value={value}
        onChange={handleChange}></textarea>
      <button className={style.btn}>Отправить</button>
    </form>
  );
};

FormComment.propTypes = {
  onSubmitForm: PropTypes.func,
};
