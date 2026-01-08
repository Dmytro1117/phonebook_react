import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;

  background: rgba(224, 230, 236, 0.6);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);

  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.03);
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;
`;

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 80px;
  align-items: center;

  & > div {
    display: flex;
    align-items: center;
    height: 100%;
    gap: 15px;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--text-secondary);
  font-size: 16px;
  font-weight: 600;
  padding: 4px 16px;
  border-radius: 4px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  height: fit-content;

  &:hover {
    color: var(--accent-color);
    background: rgba(58, 151, 232, 0.05);
  }

  &.active {
    color: #ffffff;
    background: var(--text-secondary);

    font-size: 16px;
    font-weight: 600;
  }
`;
export const UserMenuWrapper = styled.div`
  animation: fadeInRight 0.5s ease-out;
  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
