import { Tex, Img, Container } from './NotFoundPage.styled';
import hero from '../../../src/images/notFound.png';

const NotFoundPage = () => {
  return (
    <Container>
      <Img src={hero} alt="Mr.Hero" />
      <Tex>There are no matches for this request</Tex>
    </Container>
  );
};

export default NotFoundPage;
