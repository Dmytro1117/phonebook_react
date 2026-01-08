import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { addContact } from '../../redux/contacts/operationsContacts';
import { schema } from '../../helpers/formSchema';
import { Section } from '../../components/Section/Section';
import { selectAllContacts } from '../../redux/contacts/contactsSelectors';
import { Label, Input, Error, ButtonSubmit, PageWrapper } from './ContactForm.styled';

const initialValues = {
  name: '',
  phone: '',
};

export default function ContactForm() {
  const dispatch = useDispatch();
  const allContacts = useSelector(selectAllContacts);

  const handleSubmit = ({ name, phone }, { resetForm }) => {
    const newContact = {
      name,
      phone,
    };

    if (
      allContacts.some(
        num =>
          num.name.toLowerCase() === newContact.name.toLowerCase() ||
          num.phone === newContact.phone,
      )
    ) {
      return Notify.warning(
        `${newContact.name} or ${newContact.phone} вже є в списку контактів (is already in contacts)`,
      );
    }

    Notify.success(`${newContact.name}: ${newContact.phone} додано (added successfully)`);

    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <PageWrapper>
      <Section title="Додати новий контакт:">
        <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
          <Form autoComplete="off">
            <Label htmlFor="name">
              Ім'я
              <Input placeholder="Введіть ім'я" type="text" name="name" />
              <Error name="name" component="div" />
            </Label>
            <Label htmlFor="phone">
              Номер телефону
              <Input placeholder="Введіть номер" type="tel" name="phone" />
              <Error name="phone" component="div" />
            </Label>
            <ButtonSubmit type="submit">Додати до записника</ButtonSubmit>
          </Form>
        </Formik>
      </Section>
    </PageWrapper>
  );
}
