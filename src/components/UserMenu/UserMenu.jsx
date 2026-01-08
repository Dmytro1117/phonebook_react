// import { useDispatch, useSelector } from 'react-redux';
// import { Avatar } from 'antd';
// import { LogoutOutlined } from '@ant-design/icons';
// import { logOut } from '../../redux/auth/operationsAuth';
// import { selectUser } from '../../redux/auth/authSelectors';
// import { WrapperUser, ButtonLogout } from './Usermenu.styled';

// export const UserMenu = () => {
//   const { email } = useSelector(selectUser);
//   const dispatch = useDispatch();

//   return (
//     <WrapperUser>
//       <Avatar>{email.slice(0, 1).toUpperCase()}</Avatar>
//       <p>{email}</p>
//       <ButtonLogout type="default" onClick={() => dispatch(logOut())}>
//         <LogoutOutlined /> Вийти
//       </ButtonLogout>
//     </WrapperUser>
//   );
// };

import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Tag } from 'antd';
import { LogoutOutlined, CameraOutlined } from '@ant-design/icons';
import { logOut, updateAvatar } from '../../redux/auth/operationsAuth';
import { selectUser } from '../../redux/auth/authSelectors';
import { WrapperUser, ButtonLogout } from './Usermenu.styled';

export const UserMenu = () => {
  const { email, avatar, subscription } = useSelector(selectUser);
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const getSubscriptionColor = sub => {
    switch (sub) {
      case 'starter':
        return 'default';
      case 'pro':
        return 'gold';
      case 'business':
        return 'magenta';
      default:
        return 'blue';
    }
  };

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = event => {
    const file = event.target.files[0];
    if (file) {
      dispatch(updateAvatar(file));
    }
  };

  return (
    <WrapperUser>
      <div style={{ position: 'relative', cursor: 'pointer' }} onClick={handleAvatarClick}>
        <Avatar src={avatar} size={40} icon={!avatar && email.slice(0, 1).toUpperCase()} />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            background: '#3a97e8',
            borderRadius: '50%',
            width: '18px',
            height: '18px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '2px solid white',
          }}
        >
          <CameraOutlined style={{ fontSize: '10px', color: 'white' }} />
        </div>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
        accept="image/*"
      />

      {/* <p>{email}</p> */}

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <p style={{ margin: 0, fontWeight: 'bold' }}>{email}</p>
        <Tag
          color={getSubscriptionColor(subscription)}
          style={{ marginTop: '4px', textTransform: 'uppercase' }}
        >
          {subscription || 'starter'}
        </Tag>
      </div>

      <ButtonLogout type="default" onClick={() => dispatch(logOut())}>
        <LogoutOutlined /> Вийти
      </ButtonLogout>
    </WrapperUser>
  );
};
