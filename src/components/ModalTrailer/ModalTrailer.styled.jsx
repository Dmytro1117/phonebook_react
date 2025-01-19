import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalContent = styled.div`
  border-radius: 8px;
  overflow: hidden;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 300px;
  background: transparent;
  border: none;
  font-size: 44px;
  cursor: pointer;
  color: white;

  &:hover {
    color: blue;
  }
`;
