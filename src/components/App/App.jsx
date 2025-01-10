import { Component } from 'react';
import * as API from '../../services/PixabayApi';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import { Tex, Img, Container } from './App.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notFound from '../../images/notfound.png';
import hero from '../../images/hero.png';

class App extends Component {
  state = {
    searchName: '',
    images: [],
    currentPage: 1,
    error: null,
    isLoading: false,
    totalPages: 0,
  };

  componentDidUpdate(_, prevState) {
    const { searchName, currentPage } = this.state;

    // if (prevState.searchName === this.state.searchName) {
    //   return toast.error('Sorry ddddddddddddddnd...', {
    //     position: toast.POSITION.TOP_RIGHT,
    //   });
    // }

    if (
      prevState.searchName !== this.state.searchName ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.addImages(searchName, currentPage);
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  handleSubmit = searchName => {
    const { searchName: prevSearchName } = this.state;

    if (searchName === prevSearchName) {
      toast.error('You are currently viewing the collection of this term!', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    this.setState({
      searchName,
      images: [],
      currentPage: 1,
      totalPages: 0,
    });
  };

  addImages = async (query, page) => {
    if (!query) {
      return;
    }
    try {
      this.setState({ isLoading: true });
      const data = await API.getImages(query, page);
      if (data.hits.length === 0) {
        this.setState({ error: 'Something went wrong!' });
        return toast.info('Sorry image not found...', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }

      if (page === 1) {
        toast.success(`We found ${data.totalHits} images.`);
      }

      this.setState(state => ({
        images: [...state.images, ...data.hits],
        error: '',
        totalPages: data.total,
        isLoading: false,
      }));
    } catch (error) {
      this.setState({ error: 'Something went wrong!' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { images, isLoading, totalPages, searchName, error } = this.state;

    return (
      <div>
        <ToastContainer autoClose={1500} theme="dark" />
        <SearchBar onSubmit={this.handleSubmit} />

        {searchName === '' && (
          <Container>
            <Img src={hero} alt="Mr.Hero" />
            <Tex>Search images and photos</Tex>
          </Container>
        )}

        {isLoading && <Loader />}

        {images.length > 0 && <ImageGallery images={images} />}

        {images.length < totalPages && !error && <Button onClick={this.loadMore} />}

        {error && (
          <Container>
            <Img src={notFound} alt="Mr.Peabody" />
            <Tex>Images not found</Tex>
          </Container>
        )}
      </div>
    );
  }
}

export default App;
