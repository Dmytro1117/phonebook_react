import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/Contacts/filtersSlice';
import { getFilter } from '../../redux/selectors';
import css from '../ContactForm/ContactForm.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const text = useSelector(getFilter);

  return (
    <label className={css.labelName}>
      Знайти по імені
      <input
        type="text"
        value={text}
        onChange={e => {
          dispatch(setFilter(e.currentTarget.value));
        }}
        placeholder="Введіть ім'я"
      />
    </label>
  );
};
