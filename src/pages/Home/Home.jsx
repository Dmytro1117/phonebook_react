import React from 'react';
import { useSelector } from 'react-redux';
import { Tex, Img, Container, HomeLink, UnderTitle } from './Home.styled';
import hero from '../../../src/images/contacts.png';
import auth from '../../../src/images/auth.png';

const Home = () => {
  const { isLoaggedIn } = useSelector(state => state.auth);
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
          <Img src={auth} alt="Mr.auth" />
          <UnderTitle>
            Перейдіть на вкладку
            <HomeLink to="/contacts">Контакти</HomeLink>
            та керуйте телефонною книгою
          </UnderTitle>
        </>
      )}
    </Container>
  );
};

export default Home;
