import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import {Route, Routes} from 'react-router-dom';
import Modal from '../Modal';
import {Start} from './Start/Start';
import NotFound from './404';

export const Main = () => {
  return (
    <main className={style.main}>
      <Layout>
        <Tabs />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/auth" element={<Start />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/category/:page" element={<List />}>
            <Route path="post/:id" element={<Modal />} />
          </Route>
        </Routes>
      </Layout>
    </main>
  );
};
