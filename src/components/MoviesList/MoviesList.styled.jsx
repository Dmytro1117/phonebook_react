import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.ul`
  overflow: hidden;
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 0;
  justify-content: center;
  padding: 0;
  max-width: calc(100vw - 35px);
`;

export const Item = styled.li`
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%),
    0px 1px 10px 0px rgb(0 0 0 / 12%);
  max-width: 250px;
  border-radius: 5px;
  border: 1px solid #aaa;
  text-decoration: none;
  color: black;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #191d1e;
`;

export const Img = styled.img`
  width: 100%;
  height: 375px;
  object-fit: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.05);
  }
`;

export const MovieTitle = styled.div`
  color: #3f51b5;
  display: flex;
  justify-content: center;
  padding: 5px 10px;
  align-items: center;
  text-align: center;
  font-style: italic;
  color: #fff;
  height: 40px;
  overflow: hidden;
  background: rgba(133, 128, 128, 0.38);
  flex-shrink: 0;
`;

export const Text = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 18px;
  color: black;
`;
