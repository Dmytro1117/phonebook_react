import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  margin: 24px;
  gap: 24px;
`;

export const List = styled.ul`
  display: inline-flex;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const ListInfo = styled.ul`
  display: flex;
  gap: 22px;
  list-style: none;
  margin: 20px;
  padding: 0;
  list-style-type: none;
`;

export const LinkInfo = styled(Link)`
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  color: white;
  background-color: orangered;
  &:hover {
    color: orange;
    background-color: grey;
  }
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  color: white;
  margin-top: 18px;
  background-color: orangered;
  &:hover {
    color: orange;
    background-color: grey;
  }
`;
