import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as API from '../../services/PixabayApi';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import { Tex, Img, Container } from './App.styled';
import notFound from '../../images/notfound.png';
import hero from '../../images/hero.png';

const App = () => {
  const [searchName, setSearchName] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setsTotalPages] = useState(0);

  useEffect(() => {
    addImages(searchName, currentPage);
  }, [searchName, currentPage]);

  const loadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleSubmit = newSearchName => {
    if (newSearchName === searchName) {
      toast.error('You are currently viewing the collection of this term!', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    setSearchName(newSearchName);
    setImages([]);
    setCurrentPage(1);
    setsTotalPages(0);
  };

  const addImages = async (query, page) => {
    if (!query) {
      return;
    }
    try {
      setIsLoading(true);
      const data = await API.getImages(query, page);
      if (data.hits.length === 0) {
        setError('Something went wrong!');
        return toast.info('Sorry image not found...', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }

      if (page === 1) {
        toast.success(`We found ${data.totalHits} images.`);
      }

      setImages([...images, ...data.hits]);
      setError('');
      setsTotalPages(data.total);
      setIsLoading(false);
    } catch (error) {
      setError('Something went wrong!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <ToastContainer autoClose={1500} theme="dark" />
      <SearchBar onSubmit={handleSubmit} />

      {searchName === '' && (
        <Container>
          <Img src={hero} alt="Mr.Hero" />
          <Tex>Search images and photos</Tex>
        </Container>
      )}

      {isLoading && <Loader />}

      {images.length > 0 && <ImageGallery images={images} />}

      {images.length < totalPages && !error && <Button onClick={loadMore} />}

      {error && (
        <Container>
          <Img src={notFound} alt="Mr.Peabody" />
          <Tex>Images not found</Tex>
        </Container>
      )}
    </div>
  );
};

export default App;
