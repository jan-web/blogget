import {useEffect, useState} from 'react';

export const useToken = (state) => {
  const [token, setToken] = useState(state);

  useEffect(() => {
    if (location.pathname.includes('/auth')) {
      const token = new URLSearchParams(location.hash.substring(1)).get(
        'access_token'
      );
      setToken(token);
    }

    if (localStorage.getItem('bearer', token)) {
      setToken(localStorage.getItem('bearer', token));
    }
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem('bearer', token);
    }
  }, [token]);

  const delToken = () => {
    localStorage.removeItem('bearer');
  };

  return [token, delToken];
};
