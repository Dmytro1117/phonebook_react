import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Avatar } from 'antd';
import { StarOutlined, StarFilled, CameraOutlined, UserOutlined } from '@ant-design/icons';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  deleteContact,
  toggleFavorite,
  updateContact,
} from '../../redux/contacts/operationsContacts';

import {
  ContactInfo,
  ContactName,
  ContactPhone,
  CiTrashStyled,
  CiEditStyled,
  AvatarWrapper,
  Overlay,
  StarWrapper,
  Backdrop,
  ModalContent,
  CloseButton,
  ModalTitle,
} from './ContactItem.styled';
import { Label, Input, Error, ButtonSubmit } from '../../pages/ContactForm/ContactForm.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^\p{Lu}[\p{L}\s.'-]+$/u, "Ім'я має починатися з великої літери (без цифр)")
    .max(25, 'Максимальна довжина 25 символів')
    .required("Ім'я є обов'язковим полем"),
  phone: yup
    .string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Номер має бути в форматі 555-55-55')
    .required("Номер є обов'язковим полем"),
});

export const ContactItem = ({ item }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fileInputRef = useRef(null);

  const handleToggleFavorite = () => {
    dispatch(
      toggleFavorite({
        contactId: item._id,
        favorite: !item.favorite,
      }),
    );
  };
  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleUpdate = values => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('phone', values.phone);

    dispatch(updateContact({ contactId: item._id, formData }));
    setIsModalOpen(false);
    Notify.success(`Контакт ${values.name} оновлено`);
  };

  const handleFileChange = async event => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('name', item.name);
      formData.append('phone', item.phone);
      formData.append('cover', file);

      dispatch(updateContact({ contactId: item._id, formData }));
    }
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
    Notify.failure(`Контакт видалено (Delete complited)`);
  };

  return (
    <>
      <StarWrapper $isFavorite={item.favorite} onClick={handleToggleFavorite}>
        {item.favorite ? <StarFilled /> : <StarOutlined />}
      </StarWrapper>

      <AvatarWrapper onClick={handleAvatarClick}>
        <Avatar
          src={item.cover}
          size={45}
          shape="square"
          icon={<UserOutlined />}
          style={{ borderRadius: '4px' }}
        />
        <Overlay className="overlay">
          <CameraOutlined />
        </Overlay>
      </AvatarWrapper>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
        accept="image/*"
      />

      <ContactInfo>
        <ContactName>{item.name}</ContactName>
        <ContactPhone>{item.phone}</ContactPhone>
      </ContactInfo>

      <CiEditStyled size={24} onClick={() => setIsModalOpen(true)} />
      <CiTrashStyled type="button" size={24} onClick={() => handleDeleteContact(item._id)} />

      {isModalOpen && (
        <Backdrop onClick={() => setIsModalOpen(false)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={() => setIsModalOpen(false)}>×</CloseButton>
            <ModalTitle>Редагувати контакт:</ModalTitle>

            <Formik
              initialValues={{ name: item.name, phone: item.phone }}
              validationSchema={schema}
              onSubmit={handleUpdate}
            >
              <Form>
                <Label>
                  Ім'я
                  <Input type="text" name="name" />
                  <Error name="name" component="div" />
                </Label>
                <Label style={{ marginTop: '15px' }}>
                  Номер телефону
                  <Input type="tel" name="phone" />
                  <Error name="phone" component="div" />
                </Label>
                <ButtonSubmit type="submit" style={{ marginTop: '20px' }}>
                  Зберегти зміни
                </ButtonSubmit>
              </Form>
            </Formik>
          </ModalContent>
        </Backdrop>
      )}
    </>
  );
};
