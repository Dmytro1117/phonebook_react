import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

const Pagination = ({ totalPage, currentPage, onPageChange }) => {
  const maxButtons = 3;
  const handlePageClick = page => {
    if (page >= 1 && page <= totalPage) {
      onPageChange(page);
    }
  };

  const renderPages = () => {
    const pages = [];
    const halfRange = Math.floor(maxButtons / 2);

    let startPage = Math.max(currentPage - halfRange, 1);
    let endPage = Math.min(currentPage + halfRange, totalPage);

    if (currentPage <= halfRange) {
      endPage = Math.min(maxButtons, totalPage);
    } else if (currentPage + halfRange >= totalPage) {
      startPage = Math.max(totalPage - maxButtons + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          style={{
            padding: '8px 12px',
            margin: '0 4px',
            fontSize: '16px',
            cursor: 'pointer',
            border: '1px solid #ddd',
            borderRadius: '2px',
            backgroundColor: currentPage === i ? '#007bff' : '#fff',
            color: currentPage === i ? '#fff' : '#000',
          }}
        >
          {i}
        </button>,
      );
    }

    return pages;
  };

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', alignItems: 'center' }}
    >
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        style={{
          padding: '8px 12px',
          margin: '0 4px',
          fontSize: '16px',
          cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
          border: '1px solid #ddd',
          borderRadius: '2px',
          backgroundColor: '#fff',
          color: '#000',
        }}
      >
        <SlArrowLeft size="10" />
      </button>
      {currentPage > Math.ceil(maxButtons / 2) && totalPage > maxButtons && (
        <>
          <button
            onClick={() => handlePageClick(1)}
            style={{
              padding: '8px 12px',
              margin: '0 4px',
              fontSize: '16px',
              cursor: 'pointer',
              border: '1px solid #ddd',
              borderRadius: '2px',
              backgroundColor: '#fff',
              color: '#000',
            }}
          >
            1
          </button>
          <button
            style={{
              padding: '8px 12px',
              margin: '0 4px',
              fontSize: '16px',
              border: 'none',
              backgroundColor: '#fff',
              color: '#000',
            }}
          >
            ...
          </button>
        </>
      )}
      {renderPages()}
      {currentPage + Math.floor(maxButtons / 2) < totalPage && totalPage > maxButtons && (
        <>
          <button
            style={{
              padding: '8px 12px',
              margin: '0 4px',
              fontSize: '16px',

              border: 'none',

              backgroundColor: '#fff',
              color: '#000',
            }}
          >
            ...
          </button>

          <button
            onClick={() => handlePageClick(totalPage)}
            style={{
              padding: '8px 12px',
              margin: '0 4px',
              fontSize: '16px',
              cursor: 'pointer',
              border: '1px solid #ddd',
              borderRadius: '2px',
              backgroundColor: '#fff',
              color: '#000',
            }}
          >
            {totalPage}
          </button>
        </>
      )}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPage}
        style={{
          padding: '8px 12px',
          margin: '0 4px',
          fontSize: '16px',
          cursor: currentPage === totalPage ? 'not-allowed' : 'pointer',
          border: '1px solid #ddd',
          borderRadius: '2px',
          backgroundColor: '#fff',
          color: '#000',
        }}
      >
        <SlArrowRight size="10" />
      </button>
    </div>
  );
};

export default Pagination;
