import { useState, useEffect } from 'react';
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

const App = () => {
  const [searchName, setSearchName] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [per_page, setPer_page] = useState(12);

  useEffect(() => {
    addImages(searchName, currentPage);
  }, [searchName, currentPage]);

  const loadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleSubmit = searchName => {
    setSearchName(searchName);
    setImages([]);
    setCurrentPage(1);
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
        return toast.info('Sorry, image not found...', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }

      if (page === 1) {
        toast.success(`Hooray! We found ${data.totalHits} images.`);
      }

      const normalizedImages = API.normalizedImages(data.hits);

      setImages([...images, ...normalizedImages]);
      setIsLoading(false);
      setError(null);
      setTotalPages(Math.ceil(data.totalHits / per_page));
    } catch (error) {
      setError('Something went wrong!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <ToastContainer autoClose={2000} theme="dark" />
      <SearchBar onSubmit={handleSubmit} />
      {searchName === '' && (
        <Container>
          <Img src={hero} alt="Mr.Peabody" />
          <Tex>Search images and photos</Tex>
        </Container>
      )}
      {isLoading && <Loader />}
      {images.length > 0 && <ImageGallery images={images} />}
      {images.length > 0 && totalPages !== currentPage && !isLoading && (
        <Button onClick={loadMore} />
      )}

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
