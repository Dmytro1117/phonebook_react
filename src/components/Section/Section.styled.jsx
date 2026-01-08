import styled from 'styled-components';

export const SectionStyled = styled.section`
  max-width: 800px;
  padding: 40px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
  margin: 20px auto;
  border-radius: 8px; /
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.03);
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 32px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #3a97e8, #2575fc);
    border-radius: 2px;
  }
`;
