import style from './FormComment.module.css';
import {Text} from '../../../../../UI/Text';
import {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {updateComment} from '../../../../../store/commentReducer.js';
import {useAuth} from '../../../../../hooks/useAuth.js';

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
    console.log(value);
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
