import styled from 'styled-components';
import { FaPhone } from 'react-icons/fa';
import { CiTrash } from 'react-icons/ci';

export const FaPhoneStyled = styled(FaPhone)`
  display: block;
  margin-right: 8px;
  color: rgba(104, 105, 107, 0.877);
`;

export const CiTrashStyled = styled(CiTrash)`
  cursor: pointer;
  color: rgba(104, 105, 107, 0.877);

  &:hover,
  &:focus {
    cursor: pointer;
    color: rgba(219, 39, 15, 0.781);
  }
`;

export const ContactInfo = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
`;
