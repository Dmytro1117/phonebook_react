import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import * as yup from 'yup';
import { addContact } from '../../redux/contacts/operationsContacts';
import { Section } from '../../components/Section/Section';
import { selectAllContacts } from '../../redux/contacts/contactsSelectors';
import { Label, Input, Error, ButtonSubmit } from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^\p{Lu}[\p{L}\s.'-]+$/u, "Ім'я має починатися з великої літери (без цифр)")
    .max(25, 'Максимальна довжина 25 символів')
    .required("Ім'я є обов'язковим полем"),
  number: yup
    .string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Номер має бути в форматі 555-55-55')
    .required("Номер є обов'язковим полем"),
});

const initialValues = {
  name: '',
  number: '',
};

export default function ContactForm() {
  const dispatch = useDispatch();
  const allContacts = useSelector(selectAllContacts);

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const newContact = {
      name,
      number,
    };

    if (
      allContacts.some(
        num =>
          num.name.toLowerCase() === newContact.name.toLowerCase() ||
          num.number === newContact.number,
      )
    ) {
      return Notify.warning(`${newContact.name} or ${newContact.number} is already in contacts`);
    }

    Notify.success(`${newContact.name}: ${newContact.number} added successfully`);

    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <Section title="Додати новий контакт:">
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
        <Form autoComplete="off">
          <Label htmlFor="name">
            Ім'я
            <Input placeholder="Введіть ім'я" type="text" name="name" />
            <Error name="name" component="div" />
          </Label>
          <Label htmlFor="number">
            Номер телефону
            <Input placeholder="Введіть номер" type="tel" name="number" />
            <Error name="number" component="div" />
          </Label>

          <ButtonSubmit type="submit">Додати до записника</ButtonSubmit>
        </Form>
      </Formik>
    </Section>
  );
}
