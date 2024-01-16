import React from 'react';
import PropTypes from 'prop-types';
import {useGetBestPosts} from '../hooks/useGetBestPosts';

export const bestPostsContext = React.createContext({});

export const BestPostsContextProvider = ({children}) => {
  const [bestPostsData] = useGetBestPosts();

  return (
    <bestPostsContext.Provider value={{bestPostsData}}>
      {children}
    </bestPostsContext.Provider>
  );
};

BestPostsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
