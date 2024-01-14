import Layout from '../Layout';
import Auth from './Auth';
import style from './Header.module.css';
import Heading from './Heading';
import Logo from './Logo';
import Search from './Search';
import PropTypes from 'prop-types';

export const Header = ({token, delToken}) => (
  <header className={style.header}>
    <Layout>
      <div className={style.gridContainer}>
        <Logo />
        <Heading text={'Главная'} />
        <Search />
        <Auth token={token} delToken={delToken}/>
      </div>
    </Layout>
  </header>
);

Header.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
