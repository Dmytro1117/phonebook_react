import { Triangle } from 'react-loader-spinner';
import { LodeWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LodeWrapper>
      <Triangle
        visible={true}
        height="100"
        width="100"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        color="#0000FF"
      />
    </LodeWrapper>
  );
};

export default Loader;
