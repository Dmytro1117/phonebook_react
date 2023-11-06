import { Component } from 'react';
import { FcCameraIdentification } from 'react-icons/fc';
import PropTypes from 'prop-types';
import {
  SearchForm,
  SearchInput,
  SearchButton,
  // SearchSpan,
  Psxabay,
  SearchLogo,
} from './SearchBar.styled';
import { toast } from 'react-toastify';
import Logo from '../../images/pixabay-logo.png';

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
    this.setState({ searchName: '' });
  };

  render() {
    return (
      <header>
        <SearchForm onSubmit={this.handleSubmit}>
          <Psxabay href="https://pixabay.com/" target="_blank" rel="noreferrer">
            <SearchLogo src={Logo} alt="logo" />
          </Psxabay>
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
            {/* <SearchSpan>Search</SearchSpan> */}
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
