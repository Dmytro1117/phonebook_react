import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Tex = styled.p`
  color: #2e2d2dbc;
  padding: 10px;
  font-size: 34px;
  margin: 0;
`;

export const Img = styled.img`
  width: 450px;
  object-fit: contain;
  object-position: center;
  display: flex;
  margin: 0 auto;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100vh - 140px);
`;

export const UnderTitle = styled.h2`
  margin-top: 26px;
  color: #2e2d2dbc;
  text-align: center;
  font-size: 28px;
  height: 40px;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  margin: 0 6px;
  color: white;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  border: 1px solid #1677ff;
  border-radius: 2px;
  box-shadow: 0 2px 0 rgb(5 145 255 / 10%);
  padding: 2px 8px;
  background-color: #1677ff;
  font-weight: 400;
  font-size: 18px;

  &:hover,
  &:focus {
    opacity: 0.8;
    background-color: white;
    color: #1677ff;
  }
`;
