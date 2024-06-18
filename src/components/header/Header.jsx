import NavMenu from '../Navigation/NavMenu';
import './Header.css'
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <Link to={'/articles'}>
        <h1>Northcoders News</h1>
      </Link>
      <NavMenu />
    </header>
  );
};
