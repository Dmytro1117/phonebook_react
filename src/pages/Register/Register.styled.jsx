import styled from 'styled-components';
import { Button } from 'antd';

export const Container = styled.div`
  width: 550px;
  padding: 20px;
  box-shadow: 4px 4px 8px #8888888e;
  margin: auto;
  margin-top: calc(
    50vh - 60px
  ); /* Пів висоти екрану мінус висота шапки (60px) */
  transform: translateY(-50%);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 400px;
  margin-bottom: 22px;
  font-size: 18px;
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

export const But = styled(Button)`
  border-radius: 2px;

  display: block;
  font-size: 18px;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h2`
  font-size: 28px;
  color: #1374ce;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 18px;
  margin-top: 18px;
`;
