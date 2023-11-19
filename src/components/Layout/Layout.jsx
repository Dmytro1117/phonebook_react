import { AppBar } from '../../components/AppBar/AppBar';
import { Suspense } from 'react'; // для лінивої загрузки
import Footer from '../../components/Footer/Footer';
import { Container, Content } from './Layout.styled';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Container>
      {/* для того щоб AppBar не перекривав контент */}
      <AppBar />
      {/* для лінивої загрузки */}
      <Content>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Content>
      <Footer />
    </Container>
  );
};
