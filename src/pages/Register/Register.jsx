import { register } from '../../redux/Authorization/operations';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input, Container, But, Title } from './Register.styled';

const Register = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Title>Зареєструвати нового користувача</Title>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={handleChange}
        />
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
          Зареєструватись
        </But>
      </form>
    </Container>
  );
};

export default Register;
