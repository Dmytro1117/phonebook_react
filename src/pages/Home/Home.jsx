import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/authSelectors';
import { Tex, Img, Container, HomeLink, UnderTitle } from './Home.styled';

const authImgUrl =
  'https://res.cloudinary.com/dpvqbbgkd/image/upload/v1777360042/Phonebook/hero/auth_qtiyy1.png';

const heroImgUrl =
  'https://res.cloudinary.com/dpvqbbgkd/image/upload/v1777360042/Phonebook/hero/contacts_clfhqs.png';

const Home = () => {
  const isLoaggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);

  return (
    <Container>
      {!isLoaggedIn ? (
        <>
          <Tex>Ласкаво просимо до телефонної книги</Tex>
          <Img src={heroImgUrl} alt="Mr.hero" />
          <UnderTitle>
            <HomeLink to="/register">Зареєструйтеся </HomeLink>
            або
            <HomeLink to="/login">Увійдіть</HomeLink>
            ,щоб користуватися додатком
          </UnderTitle>
        </>
      ) : (
        <>
          <UnderTitle>Вітаю, {name}</UnderTitle>
          <Img src={authImgUrl} alt="Mr.auth" />
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
