import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/authSelectors';
import hero from '../../../src/images/contacts.png';
import auth from '../../../src/images/auth.png';
import { Tex, Img, Container, HomeLink, UnderTitle } from './Home.styled';

const Home = () => {
  const isLoaggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);

  return (
    <Container>
      {!isLoaggedIn ? (
        <>
          <Tex>Ласкаво просимо до телефонної книги</Tex>
          <Img src={hero} alt="Mr.hero" />
          <UnderTitle>
            <HomeLink to="/register">Зареєструйтеся </HomeLink>
            або
            <HomeLink to="/login">Увійдіть</HomeLink>
            ,щоб користуватися додатком
          </UnderTitle>
        </>
      ) : (
        <>
          <UnderTitle>Доброго дня, {name}</UnderTitle>
          <Img src={auth} alt="Mr.auth" />
          <UnderTitle>
            перейдіть на вкладку
            <HomeLink to="/contacts">Контакти</HomeLink>
            та керуйте телефонною книгою
          </UnderTitle>
        </>
      )}
    </Container>
  );
};

export default Home;
