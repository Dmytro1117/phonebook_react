import styled from '@emotion/styled';

export const List = styled.ul`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  list-style-type: none;
  padding: 0;
  justify-content: center;
`;

export const Text = styled.p`
  margin-top: 8px;
`;

export const ListItem = styled.li`
  min-width: 182px;
  font-size: 14px;
  padding: 6px;
  text-align: center;
  max-width: min-content;

  img {
    max-width: 182px;
    border-radius: 4px;
  }
  span {
    color: #ffc700;
  }
`;
