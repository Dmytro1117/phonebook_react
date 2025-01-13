import PropTypes from 'prop-types';
import { ButtonLoad, CenteredContainer } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <CenteredContainer>
      <ButtonLoad type="button" onClick={onClick}>
        Load more
      </ButtonLoad>
    </CenteredContainer>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
