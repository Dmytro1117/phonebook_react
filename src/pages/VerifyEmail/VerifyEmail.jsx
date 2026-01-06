import { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { verificationUser } from '../../redux/auth/operationsAuth';
import { Container, Title } from '../../pages/Register/Register.styled';

const VerifyEmail = () => {
  const { verificationToken } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialized = useRef(false);

  useEffect(() => {
    if (!verificationToken || initialized.current) return;

    initialized.current = true;

    dispatch(verificationUser(verificationToken))
      .unwrap()
      .then(() => {
        setTimeout(() => navigate('/login'), 1500);
      })
      .catch(err => {
        console.error(err);

        console.error('Verification failed:', err);

        setTimeout(() => navigate('/login'), 3000);
      });
  }, [dispatch, verificationToken, navigate]);

  return (
    <Container>
      <Title>Підтвердження пошти</Title>
      <p>Будь ласка, зачекайте, ми перевіряємо ваші дані...</p>
    </Container>
  );
};

export default VerifyEmail;
