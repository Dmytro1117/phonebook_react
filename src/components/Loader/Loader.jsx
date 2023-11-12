import { Triangle } from 'react-loader-spinner';
import { LodeWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LodeWrapper>
      <Triangle
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        color="orangered"
      />
    </LodeWrapper>
  );
};

export default Loader;
