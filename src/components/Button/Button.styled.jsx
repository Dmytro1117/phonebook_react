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
  color: white;
  background-color: blue;

  &:hover {
    color: black;
    background-color: gainsboro;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 1);
  }
`;
