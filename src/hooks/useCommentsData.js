import {useContext, useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const useCommentsData = id => {
  const [isLoading, setIsLoading] = useState(false);
  const [postAndComments, setPostAndComments] = useState({});
  const {token} = useContext(tokenContext);

  useEffect(() => {
    if (!token) return;
    setIsLoading(true);
    setPostAndComments({});
    fetch(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(
        ([
          {
            data: {
              children: [{data: post}],
            },
          },
          {
            data: {children},
          },
        ]) => {
          const comments = children.map(item => item.data);
          setPostAndComments([post, comments]);
        },
      )
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        () => setIsLoading(false);
      });
  }, [token, id]);

  return [postAndComments, isLoading];
};
