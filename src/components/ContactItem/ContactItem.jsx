import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { deleteContact } from '../../redux/contacts/operationsContacts';
import { ContactInfo, CiTrashStyled, FaPhoneStyled } from './ContactItem.styled';

export const ContactItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
    Notify.failure(`Delete complited`);
  };

  return (
    <>
      <FaPhoneStyled size={20} />
      <ContactInfo>
        {item.name}: {item.phone}
      </ContactInfo>
      <CiTrashStyled type="button" size={24} onClick={() => handleDeleteContact(item._id)} />
    </>
  );
};
