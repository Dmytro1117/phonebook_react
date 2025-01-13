import styled from '@emotion/styled';

export const SearchForm = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  background: blue;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5);
`;

export const SearchInput = styled.input`
  width: 300px;
  height: 24px;
  padding: 5px 15px;
  font-size: 16px;
  outline: none;
  border: none;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;

  &::placeholder {
    font-size: 16px;
    color: #cccccc;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 34px;
  font-size: 30px;
  font-weight: 600;
  border: none;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 126, 1);
  }
`;

export const SearchLogo = styled.img`
  // margin-right: 50px;
  width: 100px;
`;

export const Psxabay = styled.a`
  position: absolute;
  top: 17px;
  right: 20px;
`;

export const HomeLogo = styled.img`
  // margin-right: 50px;
  width: 50px;
`;

export const Home = styled.a`
  position: absolute;
  top: 2px;
  left: 20px;
`;
