import styled from 'styled-components';
import { Button } from 'antd';

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 170px);
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 480px;
  padding: 40px;
  background: #ffffff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);

  margin: 0 auto;

  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 400px;
  margin-bottom: 24px;
  font-size: 16px;
  padding: 12px 4px;
  border: none;
  border-bottom: 1.5px solid #e2e8f0;
  display: block;
  background-color: transparent !important;
  transition: all 0.3s ease;
  color: var(--text-main);

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
    -webkit-text-fill-color: var(--text-main) !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  &::placeholder {
    color: var(--text-secondary);
    opacity: 0.7;
  }

  &:focus {
    outline: none;
    border-bottom: 1.5px solid #000000;
  }

  &:hover {
    border-bottom: 1.5px solid var(--text-secondary);
  }
`;

export const But = styled(Button)`
  width: 100%;
  max-width: 400px;
  height: 48px;
  background: var(--text-main);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    background: #000000 !important;
    color: #ffffff !important;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 32px;
  letter-spacing: -0.5px;
`;
