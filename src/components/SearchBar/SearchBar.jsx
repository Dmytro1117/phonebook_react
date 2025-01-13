import { useState } from 'react';
import { FcCameraIdentification } from 'react-icons/fc';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import {
  SearchForm,
  SearchInput,
  SearchButton,
  Psxabay,
  SearchLogo,
  Home,
  HomeLogo,
} from './SearchBar.styled';
import Logo from '../../images/pixabay-logo.png';
import HomeIcon from '../../images/home.png';

const SearchBar = ({ onSubmit }) => {
  const [searchName, setSearchName] = useState('');

  const handleChange = event => {
    setSearchName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchName.trim() === '') {
      return toast.warn('Enter something', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    onSubmit(searchName);
  };

  return (
    <header>
      <SearchForm onSubmit={handleSubmit}>
        <Psxabay href="https://pixabay.com/" target="_blank" rel="noreferrer">
          <SearchLogo src={Logo} alt="logo" />
        </Psxabay>
        <Home href="https://pixabay.com/" target="_blank" rel="noreferrer">
          <HomeLogo src={HomeIcon} alt="logoHome" />
        </Home>
        <SearchInput
          name="searchName"
          type="text"
          autoFocus
          value={searchName}
          onChange={handleChange}
          placeholder="Search images"
          autoComplete="off"
        />
        <SearchButton>
          <FcCameraIdentification />
        </SearchButton>
      </SearchForm>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
