import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  padding: 0;
`;

export const Item = styled.li`
  background: rgb(255, 255, 255);
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
  0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  width: 100%;
  max-width: 200px;
  margin: 10px;
  border-radius: 5px;
  display: inline-block;
  text-decoration: none;
  color: black;
  transition-duration: 300ms;
  &:hover {
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: rgb(0 0 0 / 8%) 0px 10px 25px;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #191d1e;

  &:hover {
    color: tomato;
  }
`;
export const Img = styled.img`
  padding: 0px;
  margin: 0px;
  height: 260px;
  width: 100%;
  display: block;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const MovieTitle = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
  margin: 0px;
  font-size: 10px;
  color: #3f51b5;
`;

export const Text = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 18px;
  color: black;
`;
