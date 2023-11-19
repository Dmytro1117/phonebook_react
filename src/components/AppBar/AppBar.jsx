import {
  Nav,
  Link,
  RegIcon,
  LogInIcon,
  HomeIcon,
  ContactIcon,
  Container,
} from './AppBar.styled';

import { Loader } from '../Loader/Loader';
import { UserMenu } from '../../components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';

export const AppBar = () => {
  const { isLoaggedIn, isLoading } = useSelector(state => state.auth); // це для того щоб не було редіректу на логін поки не завантажиться токен

  return (
    <header>
      {isLoading && <Loader />}

      <Container>
        <Nav>
          <div>
            <Link to="/">
              <HomeIcon />
              Головна
            </Link>
            {isLoaggedIn && (
              <Link to="/contacts">
                <ContactIcon />
                Контакти
              </Link>
            )}
          </div>
          <div>
            {isLoaggedIn ? (
              <UserMenu />
            ) : (
              <>
                <Link to="/register">
                  <RegIcon />
                  Реєстрація
                </Link>
                <Link to="/login">
                  <LogInIcon />
                  Увійти
                </Link>
              </>
            )}
          </div>
        </Nav>
      </Container>
    </header>
  );
};
