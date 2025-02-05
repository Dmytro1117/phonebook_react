import { useSelector } from 'react-redux';
import { UserMenu } from '../../components/UserMenu/UserMenu';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import {
  Nav,
  Link,
  RegIcon,
  LogInIcon,
  HomeIcon,
  ContactIcon,
  AddContactIcon,
  Container,
} from './AppBar.styled';

export const AppBar = () => {
  const isLoaggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <Container>
        <Nav>
          <div>
            <Link to="/">
              <HomeIcon />
              Головна
            </Link>
            {isLoaggedIn && (
              <>
                <Link to="/contacts">
                  <ContactIcon />
                  Контакти
                </Link>
                <Link to="/form_contact">
                  <AddContactIcon />
                  Додати новий контакт
                </Link>
              </>
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
