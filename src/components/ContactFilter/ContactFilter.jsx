import { useDispatch, useSelector } from 'react-redux';
import { sortContact } from '../../redux/contacts/filterSlice';
import { selectSortContacts } from '../../redux/contacts/contactsSelectors';
import { Label, Input } from './ContactFilter.styled';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectSortContacts);

  const handleFindContact = e => {
    dispatch(sortContact(e.currentTarget.value));
  };

  return (
    <Label>
      Знайти за ім'ям
      <Input
        type="text"
        value={filterValue}
        onChange={handleFindContact}
        placeholder="Введіть ім'я"
      />
    </Label>
  );
};
