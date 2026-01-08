import React from 'react';
import { TextFooter, FooterStyled } from './Footer.styled';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterStyled>
      <TextFooter>
        © {currentYear} <strong>Phonebook</strong>. Всі права захищені.
      </TextFooter>
    </FooterStyled>
  );
};

export default Footer;
