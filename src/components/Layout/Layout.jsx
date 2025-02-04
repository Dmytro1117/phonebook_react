import { AppBar } from '../../components/AppBar/AppBar';
import { Suspense } from 'react';
import { Loader } from '../Loader/Loader';
import Footer from '../../components/Footer/Footer';
import { Container, Content } from './Layout.styled';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Content>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Content>
      <Footer />
    </Container>
  );
};
