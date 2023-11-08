import styled from '@emotion/styled';

export const Item = styled.li`
  border-radius: 4px;
`;

export const Img = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  width: 100%;
  height: 230px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 4px;

  &:hover {
    transform: scale(1.02);
    cursor: zoom-in;
  }
`;
