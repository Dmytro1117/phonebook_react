import styled from '@emotion/styled';

export const SearchForm = styled.form`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  max-width: 400px;
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
    color: #007bff;
    border: 1px solid #007bff;
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
  background-color: #007bff;

  &:hover {
    color: white;
    background-color: gray;
  }
`;
