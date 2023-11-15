import { FaPhone } from 'react-icons/fa';
import { CiTrash } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { getContacts, getFilter } from '../../redux/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filtrContacts = () => {
    return contacts.filter(cont => cont.name.toLowerCase().includes(filter.toLowerCase()));
  };

  return filtrContacts().length === 0 ? (
    <p>Контактів не знайдено</p>
  ) : (
    <ul>
      {filtrContacts().map(({ id, name, number }) => {
        return (
          <li key={id}>
            <FaPhone className={css.icon} size={20} />
            <p>
              {name}: {number}
            </p>
            <CiTrash
              type="button"
              className={css.iconDelete}
              size={24}
              onClick={() => dispatch(deleteContact({ id }))}
            />
          </li>
        );
      })}
    </ul>
  );
};
