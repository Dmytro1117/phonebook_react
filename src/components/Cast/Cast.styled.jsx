import styled from '@emotion/styled';

export const Title = styled.h2`
  font-size: 38px;
  font-weight: 700;
  text-align: center;
  margin-top: 18px;
  margin-bottom: 18px;
`;

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
    font-size: 16px;
    font-weight: 600;
    color: #ffc700;
  }
`;

export const NotCast = styled.div`
  font-size: 20px;
  padding: 20px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
`;
