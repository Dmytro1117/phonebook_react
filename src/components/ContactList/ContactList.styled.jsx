import styled from 'styled-components';

export const ListContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

export const StatsBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  padding: 12px 20px;
  background: var(--bg-color);
  border-radius: 8px;
  border-left: 4px solid #3a97e8;

  strong {
    color: #1a1a1a;
    font-size: 16px;
  }

  span {
    background: #3a97e8;
    color: white;
    padding: 2px 10px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.06);
    border-color: rgba(58, 151, 232, 0.2);
  }
`;
