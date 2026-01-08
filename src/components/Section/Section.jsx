import { SectionStyled, Title, PageCenterWrapper } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <PageCenterWrapper>
      <SectionStyled>
        {title && <Title>{title}</Title>}
        {children}
      </SectionStyled>
    </PageCenterWrapper>
  );
};
