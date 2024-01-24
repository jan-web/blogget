import Header from './components/Header';
import Main from './components/Main';
import {store} from './store';
import {Provider} from 'react-redux';
import {AuthContextProvider} from './context/authContext';
import {BestPostsContextProvider} from './context/bestPostsContext';

function App() {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <BestPostsContextProvider>
          <Header />
          <Main />
        </BestPostsContextProvider>
      </AuthContextProvider>
    </Provider>
  );
}

export default App;
