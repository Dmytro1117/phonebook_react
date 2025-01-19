import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ImgContainer, PosterImg, Overlay, ModalWindow } from './ModalPoster.styled';

const modalRoot = document.querySelector('#modal-root');

const ModalPoster = ({ onClose, largeImageURL, tags }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'visible';
    };
  });

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <ImgContainer>
          <PosterImg src={largeImageURL} alt={tags} />
        </ImgContainer>
      </ModalWindow>
    </Overlay>,
    modalRoot,
  );
};

ModalPoster.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalPoster;
