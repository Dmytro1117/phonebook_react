import styled from 'styled-components';

export const Label = styled.label`
  color: rgba(31, 166, 224, 0.837);
  font-size: 20px;
`;

export const Input = styled.input`
  /* Виправлено тут */
  width: 400px;
  margin-bottom: 16px;
  font-size: 16px;
  padding: 8px 16px;
  border: none;
  border-bottom: 1px solid #000;
  display: block;

  &:hover,
  &:focus {
    outline: none;
    border: none;
    border-bottom: 1px solid rgba(19, 116, 206, 0.781);
  }
`;
