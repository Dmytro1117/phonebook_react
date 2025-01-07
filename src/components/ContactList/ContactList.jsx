import PropTypes from 'prop-types';
import { FaPhone } from 'react-icons/fa';
import { CiTrash } from 'react-icons/ci';
import css from './ContactList.module.css';

export const ContactList = ({ find, deleteContact }) =>
  find.length === 0 ? (
    <p>Контактів не знайдено</p>
  ) : (
    <ul>
      {find.map(({ id, name, number }) => {
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
              onClick={() => deleteContact(id)}
            />
          </li>
        );
      })}
    </ul>
  );

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  find: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
};
