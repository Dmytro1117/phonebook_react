import styled from 'styled-components';

export const Input = styled.input`
  width: 400px;
  margin-bottom: 16px;
  font-size: 16px;
  padding: 8px 16px;
  border: none;
  border-bottom: 1px solid rgba(104, 105, 107, 0.877);
  display: block;

  &:hover,
  &:focus {
    outline: none;
    border: none;
    border-bottom: 1px solid rgba(19, 116, 206, 0.781);
  }
`;
