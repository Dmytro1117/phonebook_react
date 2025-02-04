import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from 'antd';
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
  );
};
