import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { FaPhone } from 'react-icons/fa';
import { CiTrash } from 'react-icons/ci';
import { deleteContact } from '../../redux/operations';
import css from './ContactItem.module.css';

export const ContactItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
    Notify.failure(`Delete complited`);
  };

  return (
    <>
      <FaPhone className={css.icon} size={20} />
      <p>
        {item.name}: {item.phone}
      </p>
      <CiTrash
        type="button"
        className={css.iconDelete}
        size={24}
        onClick={() => handleDeleteContact(item.id)}
      />
    </>
  );
};
