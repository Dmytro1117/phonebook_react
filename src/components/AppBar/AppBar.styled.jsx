import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  UserAddOutlined,
  LoginOutlined,
  HomeOutlined,
  TeamOutlined,
} from '@ant-design/icons';

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  height: 60px;
  align-items: center;
`;

export const Link = styled(NavLink)`
  &:first-child {
    margin-right: 20px;
  }

  &.active {
    color: #3a97e8;
    border-top: 4px solid #3a97e8;
  }
  text-decoration: none;
  color: inherit;
  font-size: 20px;
  font-weight: 600;
  padding: 12px 4px;
`;

export const RegIcon = styled(UserAddOutlined)`
  margin-right: 8px;
`;

export const LogInIcon = styled(LoginOutlined)`
  margin-right: 8px;
`;

export const HomeIcon = styled(HomeOutlined)`
  margin-right: 8px;
`;

export const ContactIcon = styled(TeamOutlined)`
  margin-right: 8px;
`;

export const Container = styled.div`
  padding: 0 15px;
  width: 1200px;
`;
