import styled from 'styled-components';
import { CiTrash, CiEdit } from 'react-icons/ci';

export const CiEditStyled = styled(CiEdit)`
  cursor: pointer;
  color: var(--text-secondary);
  transition: all 0.25s ease;
  margin-right: 15px;
  flex-shrink: 0;

  &:hover,
  &:focus {
    color: var(--accent-color);
    transform: scale(1.1);
  }
`;

export const CiTrashStyled = styled(CiTrash)`
  cursor: pointer;
  color: var(--text-secondary);
  transition: all 0.25s ease;
  flex-shrink: 0;

  &:hover,
  &:focus {
    color: #ef4444;
    transform: scale(1.1);
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex-grow: 1;
  margin-right: 20px;
`;

export const ContactName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: var(--text-main);
`;

export const ContactPhone = styled.span`
  font-size: 14px;
  color: var(--text-secondary);
`;

export const AvatarWrapper = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 15px;
  width: 45px;
  height: 45px;
  flex-shrink: 0;

  &:hover .overlay {
    opacity: 1;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
  font-size: 16px;
`;

export const StarWrapper = styled.div`
  cursor: pointer;
  margin-right: 15px;
  font-size: 22px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  color: ${props => (props.$isFavorite ? '#fadb14' : '#d9d9d9')};

  &:hover {
    transform: scale(1.2);
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px);
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  width: 480px;
  position: relative;
  box-sizing: border-box;

  &,
  * {
    box-sizing: border-box;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--text-secondary);

  &:hover {
    color: #ff4d4f;
  }
`;

export const ModalTitle = styled.h3`
  margin: 0 0 24px 0;
  font-size: 24px;
  font-weight: 700;
  color: var(--text-main);
  text-align: center;
`;
