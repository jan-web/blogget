import {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {
  authLogout,
  authRequestAsync,
} from '../store/auth/action';

export const useAuth = () => {
  const auth = useSelector(state => state.auth.data);
  const loading = useSelector(state => state.auth.loading);
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authRequestAsync());
  }, [token]);

  const clearAuth = () => dispatch(authLogout());

  return [auth, loading, clearAuth];
};
