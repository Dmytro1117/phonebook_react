import styled from 'styled-components';

export const FooterStyled = styled.footer`
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: auto;
  padding: 30px 0;
`;

export const TextFooter = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: var(--text-secondary);
  margin: 0;
  letter-spacing: 0.02em;
  opacity: 0.8;

  transition: opacity 0.3s ease;
  &:hover {
    opacity: 1;
  }
`;
