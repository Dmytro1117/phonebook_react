import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const Label = styled.label`
  color: rgba(31, 166, 224, 0.837);
  font-size: 20px;
`;

export const Input = styled(Field)`
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

export const Error = styled(ErrorMessage)`
  color: red;
  font-size: 16px;
  margin-bottom: 16px;
`;

export const ButtonSubmit = styled.button`
  font-size: 18px;
  font-weight: 600;
  margin-top: 30px;
  padding: 8px 16px;
  /* border: none; */
  cursor: pointer;
  background-color: transparent;
  /* color: rgba(104, 105, 107, 0.877); */
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #6b6e72;
  border-radius: 2px;

  &:hover,
  &:focus {
    color: rgba(19, 116, 206, 0.781);
    border: 1px solid rgba(19, 116, 206, 0.781);
  }
`;
