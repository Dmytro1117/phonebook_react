import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
} from '../../components/ModalTrailer/ModalTrailer.styled';

const modalRoot = document.querySelector('#modal-root');

const ModalTrailet = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'visible';
    };
  }, [onClose]);

  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>,
    modalRoot,
  );
};

ModalTrailet.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalTrailet;
