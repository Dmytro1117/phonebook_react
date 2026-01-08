import styled from 'styled-components';
import { CiTrash, CiEdit } from 'react-icons/ci';

export const CiEditStyled = styled(CiEdit)`
  cursor: pointer;
  color: rgba(104, 105, 107, 0.877);
  transition: color 0.25s ease, transform 0.2s ease;
  margin-right: 15px; /* Відступ від кошика */
  flex-shrink: 0;

  &:hover,
  &:focus {
    color: #1677ff; /* Синій колір Ant Design або будь-який інший */
    transform: scale(1.1);
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex-grow: 1;
  margin-right: 15px;
`;

export const ContactName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

export const ContactPhone = styled.span`
  font-size: 16px;
  color: #666;
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
  border-radius: 4px; /* Квадратний оверлей */
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
  transition: color 0.3s ease, transform 0.2s ease;
  color: ${props => (props.$isFavorite ? '#fadb14' : '#d9d9d9')};

  &:hover {
    transform: scale(1.1);
  }
`;

export const CiTrashStyled = styled(CiTrash)`
  cursor: pointer;
  color: rgba(104, 105, 107, 0.877);
  transition: color 0.25s ease, transform 0.2s ease;
  flex-shrink: 0;

  &:hover,
  &:focus {
    color: rgba(219, 39, 15, 0.781);
    transform: scale(1.1);
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200; /* вище за всі елементи */
  backdrop-filter: blur(2px);
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 2px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  width: 600px;
  position: relative;

  input {
    width: 100%;
    max-width: 100%;
    display: block;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #ff4d4f;
  }
`;

export const ModalTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 30px; /* відступ до першого інпуту */
  font-size: 24px;
  font-weight: 700;
  color: #333;
  text-align: center; /* Центрування тексту */
  width: 100%;
`;
