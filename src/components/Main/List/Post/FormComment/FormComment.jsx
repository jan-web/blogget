import style from './FormComment.module.css';
import {Text} from '../../../../../UI/Text';
import {authContext} from '../../../../../context/authContext';
import {useContext, useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';

export const FormComment = ({onSubmitForm}) => {
  const {auth} = useContext(authContext);
  const textArea = useRef(null);
  const [text, setText] = useState('');

  useEffect(() => {
    textArea.current.focus();
  }, []);

  const handleOnTextAreaChange = e => {
    setText(e.target.value);
  };

  const handleOnFormSubmit = e => {
    e.preventDefault();
    console.log(textArea.current.value);
    setText('');
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
        value={text}
        onChange={handleOnTextAreaChange}></textarea>
      <button className={style.btn}>Отправить</button>
    </form>
  );
};

FormComment.propTypes = {
  onSubmitForm: PropTypes.func,
};
