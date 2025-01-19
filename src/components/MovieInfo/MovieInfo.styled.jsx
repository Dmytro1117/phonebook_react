import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 8px;
  gap: 40px;
`;

export const СompaniesListImg = styled.img`
  max-height: 50px;
  max-width: 200px;
  margin-right: 30px;
`;

export const СoverImg = styled.img`
  width: 400px;
  object-fit: 'contain';
  background-color: 'orange';
  border-radius: '4px';
`;

export const List = styled.ul`
  display: flex;
`;

export const FilmTitle = styled.h1`
  text-align: center;
  color: #007bff;
`;

export const Title = styled.h2``;

export const Description = styled.p`
  display: block;
  margin-top: 8px;
  margin-bottom: 8px;
  // color: #fff;
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
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
  border-radius: 2px;
  cursor: pointer;
  padding: 8px 16px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  color: white;
  background-color: #007bff;
  &:hover {
    color: white;
    background-color: grey;
  }
`;
