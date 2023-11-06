import styled from 'styled-components';

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonLoad = styled.button`
  width: 160px;
  height: 40px;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: black;
  background-color: gainsboro;

  &:hover,
  &:focus {
    color: black;
    background-color: rgba(255, 255, 126, 1);
  }
`;
