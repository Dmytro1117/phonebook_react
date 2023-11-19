import { useState } from 'react';
import { loginization } from '../../redux/Authorization/operations';
import { useDispatch } from 'react-redux';
import {
  Input,
  Container,
  But,
  Title,
} from '../../pages/Register/Register.styled';

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
    <Container>
      <Title>Увійти</Title>
      <form onSubmit={handleSubmit}>
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
        <But type="primary" htmlType="submit">
          Увійти
        </But>
      </form>
    </Container>
  );
};

export default Login;
