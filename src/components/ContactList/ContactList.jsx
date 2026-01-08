import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operationsContacts';
import { ContactItem } from '../ContactItem/ContactItem';
import { selectVisibleContacts } from '../../redux/contacts/contactsSelectors';
import { List, ListItem, ListContainer, StatsBlock } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ListContainer>
      <StatsBlock>
        <strong>Всього контактів</strong>
        <span>{filteredContacts.length}</span>
      </StatsBlock>

      {filteredContacts.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px', color: '#888' }}>
          <p>Контактів не знайдено</p>
        </div>
      ) : (
        <List>
          {filteredContacts.map(item => (
            <ListItem key={item._id}>
              <ContactItem item={item} />
            </ListItem>
          ))}
        </List>
      )}
    </ListContainer>
  );
};
