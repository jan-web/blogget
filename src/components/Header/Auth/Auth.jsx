import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useContext, useState} from 'react';
import {tokenContext} from '../../../context/tokenContext';
import {authContext} from '../../../context/authContext';

export const Auth = () => {
  const {delToken} = useContext(tokenContext);

  const [logOutVisible, setLogOutVisible] = useState(false);
  const {auth, clearAuth} = useContext(authContext);

  const handleShowLogOut = () => {
    setLogOutVisible(!logOutVisible);
  };

  const handleSignOut = () => {
    delToken();
    clearAuth();
  };
  return (
    <div className={style.container}>
      {auth.name ? (
        <>
          <button className={style.btn} onClick={handleShowLogOut}>
            <img
              className={style.img}
              src={auth.img}
              title={auth.name}
              alt={auth.name}
            />
          </button>
          {logOutVisible && (
            <button className={style.logout} onClick={handleSignOut}>
              Выйти
            </button>
          )}
        </>
      ) : (
        <Text className={style.authLink} As="a" href={urlAuth}>
          <LoginIcon className={style.svg} />
        </Text>
      )}
    </div>
  );
};
