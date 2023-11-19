import React from 'react';
import { Tex, Img, Container } from './StartingPage.styled';
import hero from '../../../src/images/moavies.png';

const StartingPage = () => {
  return (
    <Container>
      <Img src={hero} alt="Mr.Peabody" />
      <Tex>Trending films</Tex>
    </Container>
  );
};

export default StartingPage;
