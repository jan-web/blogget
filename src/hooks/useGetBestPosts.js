import {useContext, useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const useGetBestPosts = () => {
  const [bestPosts, setBestPosts] = useState({});
  const {token} = useContext(tokenContext);

  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/best`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then(({data}) => {
        setBestPosts(data.children);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  return [bestPosts];
};
