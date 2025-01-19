import { useEffect, useState, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import MoviesList from '../../components/MoviesList/MoviesList';
import Pagination from '../../components/Pagination/Pagination';
import { fetchTrending } from '../../services/TmbdApi';
import Loader from '../../components/Loader/Loader';

const Home = () => {
  const navigate = useNavigate();
  const [totalPage, setTotalPage] = useState(0);
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();

  const page = searchParams.get('page') ?? 1;
  const pageRef = useRef(null);

  useEffect(() => {
    const fetchTrendingFilms = () => {
      setLoading(true);

      fetchTrending(page)
        .then(trendingFilms => {
          setFilms(trendingFilms.results);
          setTotalPage(trendingFilms.total_pages);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchTrendingFilms();
  }, [page]);

  const handlePageChange = newPage => {
    navigate(`?page=${newPage}`);
    if (pageRef.current) {
      animateScroll.scrollTo(pageRef.current.offsetTop, {
        duration: 1500,
        smooth: 'easeInOutQuad',
      });
    }
  };

  return (
    <main ref={pageRef}>
      <MoviesList films={films} />

      {loading && <Loader />}

      {totalPage > 1 && (
        <Pagination
          totalPage={totalPage}
          currentPage={Number(page)}
          onPageChange={handlePageChange}
        />
      )}
    </main>
  );
};

export default Home;
