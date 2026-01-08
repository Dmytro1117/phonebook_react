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

  // return filteredContacts.length === 0 ? (
  //   <p>Контактів не знайдено</p>
  // ) : (
  //   <List>
  //     {filteredContacts.map(item => (
  //       <ListItem key={item._id}>
  //         <ContactItem item={item} />
  //       </ListItem>
  //     ))}
  //   </List>
  // );
  return (
    <div>
      {/* Додаємо інфо-блок зверху */}
      <div
        style={{
          marginBottom: '20px',
          padding: '10px',
          backgroundColor: '#f0f2f5',
          borderRadius: '4px',
        }}
      >
        <strong>Всього контактів: </strong> {filteredContacts.length}
      </div>

      {filteredContacts.length === 0 ? (
        <p>Контактів не знайдено</p>
      ) : (
        <List>
          {filteredContacts.map(item => (
            <ListItem key={item._id}>
              <ContactItem item={item} />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};
