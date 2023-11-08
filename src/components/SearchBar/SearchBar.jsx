import { useState } from 'react';
import { FcCameraIdentification } from 'react-icons/fc';
import PropTypes from 'prop-types';
import { SearchForm, SearchInput, SearchButton, Psxabay, SearchLogo } from './SearchBar.styled';
import { toast } from 'react-toastify';
import Logo from '../../images/pixabay-logo.png';

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
    setSearchName('');
  };

  return (
    <header>
      <SearchForm onSubmit={handleSubmit}>
        <Psxabay href="https://pixabay.com/" target="_blank" rel="noreferrer">
          <SearchLogo src={Logo} alt="logo" />
        </Psxabay>
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
