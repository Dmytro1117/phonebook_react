import { Component } from 'react';
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

class SearchBar extends Component {
  state = {
    searchName: '',
  };

  handleChange = event => {
    this.setState({ searchName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchName.trim() === '') {
      return toast.warn('Enter something', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    this.props.onSubmit(this.state.searchName);
    // this.setState({ searchName: '' });
  };

  render() {
    return (
      <header>
        <SearchForm onSubmit={this.handleSubmit}>
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
            value={this.state.searchName}
            onChange={this.handleChange}
            placeholder="Search images"
            autoComplete="off"
          />
          <SearchButton>
            <FcCameraIdentification />
          </SearchButton>
        </SearchForm>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
