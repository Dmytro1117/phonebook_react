import React from 'react';
import { Tex, Img, Container } from './NotFoundPage.styled';
import hero from '../../../src/images/notFound.png';

const NotFoundPage = () => {
  return (
    <Container>
      <Img src={hero} alt="Mr.Hero" />
      <Tex>There is no movies with this request. Please, try again</Tex>
    </Container>
  );
};

export default NotFoundPage;
