import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { selectVisibleContacts } from '../../redux/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);

  return filteredContacts.length === 0 ? (
    <p>Контактів не знайдено</p>
  ) : (
    <ul>
      {filteredContacts.map(item => (
        <li key={item.id}>
          <ContactItem item={item} />
        </li>
      ))}
    </ul>
  );
};
