import {useEffect} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import {AuthContextProvider} from './context/authContext';
import {TokenContextProvider} from './context/tokenContext';
import {useGetBestPosts} from './hooks/useGetBestPosts';
import {BestPostsContextProvider} from './context/bestPostsContext';

function App() {
  const [bestPosts] = useGetBestPosts();

  useEffect(() => {
  }, [bestPosts]);

  return (
    <TokenContextProvider>
      <AuthContextProvider>
        <BestPostsContextProvider>
          <Header />
          <Main />
        </BestPostsContextProvider>
      </AuthContextProvider>
    </TokenContextProvider>
  );
}

export default App;
