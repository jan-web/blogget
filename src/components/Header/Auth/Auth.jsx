import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {deleteToken} from '../../../store/token/action';
import {useAuth} from '../../../hooks/useAuth';
import Preloader from '../../../UI/Preloader';

export const Auth = () => {
  const dispatch = useDispatch();
  const [islogOutVisible, setIsLogOutVisible] = useState(false);
  const [auth, loading, clearAuth] = useAuth();

  const handleShowLogOut = () => {
    setIsLogOutVisible(!islogOutVisible);
  };

  const handleSignOut = () => {
    dispatch(deleteToken());
    clearAuth();
  };
  return (
    <div className={style.container}>
      {loading ? (
        <Preloader color={'#cc6633'} size={30} />
      ) : auth.name ? (
        <>
          <button className={style.btn} onClick={handleShowLogOut}>
            <img
              className={style.img}
              src={auth.img}
              title={auth.name}
              alt={auth.name}
            />
          </button>
          {islogOutVisible && (
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
