import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
`;

export const Content = styled.div`
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Navigation = styled.nav``;

export const Header = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5);
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 14px;
  font-weight: 600;
  font-size: 22px;
  color: #191d1e;

  &.active {
    color: tomato;
  }

  &:hover {
    color: tomato;
  }
`;

export const SearchLogo = styled.img`
  width: 50px;
`;

export const Logo = styled(NavLink)`
  margin: auto 10px;
`;
