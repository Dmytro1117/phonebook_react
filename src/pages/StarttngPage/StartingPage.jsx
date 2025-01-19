import { Tex, Img, Container } from './StartingPage.styled';
import hero from '../../../src/images/moavies.png';

const StartingPage = () => {
  return (
    <Container>
      <Img src={hero} alt="Mr.Hero" />
      <Tex>Movies</Tex>
    </Container>
  );
};

export default StartingPage;
