import styled from '@emotion/styled';

export const StatisticsWrapper = styled.section`
  margin: 24px auto;
  padding: 12px;
  width: 550px;
  background: rgba(142, 227, 212, 0.22);
  border-radius: 12px;
`;
export const StatisticsTitle = styled.h2`
  font-size: 24px;
  margin: 0;
  margin-bottom: 18px;
  color: #000000;
`;
export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
`;
export const StatItem = styled.li`
  display: grid;
  justify-items: center;
  padding: 6px;
  :first-of-type {
    border-radius: 12px 0 0 12px;
  }
  :last-child {
    border-radius: 0 12px 12px 0;
  }
  @media screen and (min-width: 768px) {
    width: 100px;
  }
`;
export const ItemLabel = styled.span`
  font-weight: 400;
  font-size: 12px;
  color: #fff;
`;
export const ItemPercentage = styled.span`
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
`;
