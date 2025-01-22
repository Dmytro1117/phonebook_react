import { useDispatch, useSelector } from 'react-redux';
import { sortContact } from '../../redux/filterSlice';
import { sortContacts } from '../../redux/selectors';
import css from '../ContactForm/ContactForm.module.css';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(sortContacts);

  const handleFindContact = e => {
    dispatch(sortContact(e.currentTarget.value));
  };

  return (
    <label className={css.labelName}>
      Знайти за ім'ям
      <input
        type="text"
        value={filterValue}
        onChange={handleFindContact}
        placeholder="Введіть ім'я"
      />
    </label>
  );
};
