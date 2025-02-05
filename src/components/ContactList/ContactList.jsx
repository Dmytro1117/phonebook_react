import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operationsContacts';
import { ContactItem } from '../ContactItem/ContactItem';
import { selectVisibleContacts } from '../../redux/contacts/contactsSelectors';
import { List, ListItem } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return filteredContacts.length === 0 ? (
    <p>Контактів не знайдено</p>
  ) : (
    <List>
      {filteredContacts.map(item => (
        <ListItem key={item.id}>
          <ContactItem item={item} />
        </ListItem>
      ))}
    </List>
  );
};
