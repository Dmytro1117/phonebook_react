import { useSelector } from 'react-redux';
import { UserMenu } from '../../components/UserMenu/UserMenu';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import { Header, Nav, Link, Container, UserMenuWrapper } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Header>
      <Container>
        <Nav>
          <div>
            <Link to="/" end>
              Головна
            </Link>
            {isLoggedIn && (
              <>
                <Link to="/contacts">Контакти</Link>
                <Link to="/form_contact">Додати контакт</Link>
              </>
            )}
          </div>

          <div>
            {isLoggedIn ? (
              <UserMenuWrapper>
                <UserMenu />
              </UserMenuWrapper>
            ) : (
              <>
                <Link to="/register">Реєстрація</Link>
                <Link to="/login">Увійти</Link>
              </>
            )}
          </div>
        </Nav>
      </Container>
    </Header>
  );
};
