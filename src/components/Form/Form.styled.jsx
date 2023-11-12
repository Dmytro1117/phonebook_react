import styled from '@emotion/styled';

export const SearchForm = styled.form`
  margin-left: auto;
  margin-right: auto;
  margin-top: 28px;
  margin-bottom: 18px;
  display: flex;
  justify-content: center;
  max-width: 400px;
`;

export const Img = styled.img`
  width: 550px;
  height: auto;
  object-fit: contain;
  object-position: center;
  display: flex;
  margin: 0 auto;
`;

export const Input = styled.input`
  background-color: silver;
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;

  &:hover {
    color: tomato;
    border: 1px solid tomato;
  }
`;

export const Button = styled.button`
  display: inline-block;
  border: 0;
  cursor: pointer;
  outline: none;
  padding: 10px 20px;
  text-decoration: none;
  color: black;
  font-weight: 600;
  color: white;
  background-color: orangered;

  &:hover {
    color: orange;
    background-color: gray;
  }
`;
