import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import PropTypes from 'prop-types';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useEffect, useState} from 'react';
import {URL_API} from '../../../api/const';

export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useState({});
  const [logOutVisible, setLogOutVisible] = useState(false);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch((err) => {
        console.log(err);
        setAuth({});
      });
  }, [token]);

  const handleShowLogOut = () => {
    setLogOutVisible(!logOutVisible);
  };

  const handleSignOut = () => {
    setAuth({});
    delToken();
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
Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
