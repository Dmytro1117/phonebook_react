import { Triangle } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.div}>
      <Triangle
        visible={true}
        height="60"
        width="60"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        color="skyblue"
      />
    </div>
  );
};
