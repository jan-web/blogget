import Header from './components/Header';
import Main from './components/Main';
import {AuthContextProvider} from './context/authContext';
import {TokenContextProvider} from './context/tokenContext';
import {BestPostsContextProvider} from './context/bestPostsContext';

function App() {
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
