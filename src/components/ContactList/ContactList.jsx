import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { FaPhone } from 'react-icons/fa';
import { CiTrash } from 'react-icons/ci';
import { deleteContact } from '../../redux/contactsSlice';
import { getContacts, sortContacts } from '../../redux/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const allContacts = useSelector(getContacts);
  const sortedContacts = useSelector(sortContacts);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
    Notify.failure(`Delete complited`);
  };

  const filtrContacts = [
    ...allContacts.filter(contact =>
      contact.name.toLowerCase().includes(sortedContacts.toLowerCase()),
    ),
  ];

  return filtrContacts.length === 0 ? (
    <p>Контактів не знайдено</p>
  ) : (
    <ul>
      {filtrContacts.map(({ id, name, number }) => {
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
              onClick={() => handleDeleteContact({ id })}
            />
          </li>
        );
      })}
    </ul>
  );
};
