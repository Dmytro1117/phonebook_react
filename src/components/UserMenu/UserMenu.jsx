import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from 'antd';
<<<<<<< HEAD
import { Wrap, Buton } from './Usermenu.styled';
import { logOut } from '../../redux/Authorization/operations';
import { useDispatch } from 'react-redux';
import { LogoutOutlined } from '@ant-design/icons';

export const UserMenu = () => {
  const { email } = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  return (
    <Wrap>
      <Avatar>{email.slice(0, 1).toUpperCase()}</Avatar>
      <p>{email}</p>
      <Buton type="default" onClick={() => dispatch(logOut())}>
        <LogoutOutlined /> Вийти
      </Buton>
    </Wrap>
=======
import { LogoutOutlined } from '@ant-design/icons';
import { logOut } from '../../redux/auth/operationsAuth';
import { selectUser } from '../../redux/auth/authSelectors';
import { WrapperUser, ButtonLogout } from './Usermenu.styled';

export const UserMenu = () => {
  const { email } = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <WrapperUser>
      <Avatar>{email.slice(0, 1).toUpperCase()}</Avatar>
      <p>{email}</p>
      <ButtonLogout type="default" onClick={() => dispatch(logOut())}>
        <LogoutOutlined /> Вийти
      </ButtonLogout>
    </WrapperUser>
>>>>>>> 08-phonebook(jwt)
  );
};
