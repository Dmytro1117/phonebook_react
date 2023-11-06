import { Triangle } from 'react-loader-spinner';
import { LodeWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LodeWrapper>
      <Triangle
        visible={true}
        height="280"
        width="280"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        color="#0000FF"
      />
    </LodeWrapper>
  );
};

export default Loader;
