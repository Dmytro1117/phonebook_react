import { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginization } from '../../redux/auth/operationsAuth';
import { useDispatch } from 'react-redux';
import { Input, Container, But, Title, PageContainer } from '../../pages/Register/Register.styled';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(loginization({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <PageContainer>
      <Container>
        <Title>Увійти</Title>
        <form
          onSubmit={handleSubmit}
          style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <Input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
          />
          <But htmlType="submit">Увійти</But>
        </form>
        <div style={{ marginTop: '15px', textAlign: 'center' }}>
          <p>
            Не отримали лист підтвердження? <Link to="/resend-email">Надіслати знову</Link>
          </p>
        </div>
      </Container>
    </PageContainer>
  );
};

export default Login;
