import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { resendVerification } from '../../redux/auth/operationsAuth';
import { Container, Title, Input, But } from '../Register/Register.styled';

const ResendEmail = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (!email) return;

    dispatch(resendVerification(email));
    console.log(email);
    setEmail('');
  };

  return (
    <Container>
      <Title>Повторно відправити листа</Title>
      <p style={{ marginBottom: '30px', textAlign: 'center', color: '#666' }}>
        Якщо ви не отримали лист для верифікації, введіть вашу пошту нижче.
      </p>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          value={email}
          placeholder="Введіть ваш Email"
          onChange={e => setEmail(e.target.value)}
          required
        />
        <But htmlType="submit">Надіслати лист</But>
        {/* <button type="submit">Надіслати лист</button> */}
      </form>
    </Container>
  );
};

export default ResendEmail;
