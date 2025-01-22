import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { addContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';
import css from './ContactForm.module.css';

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

export const ContactForm = () => {
  const dispatch = useDispatch();
  const allContacts = useSelector(getContacts);

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const newContact = {
      id: nanoid(),
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
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <label className={css.labelName} htmlFor="name">
          Ім'я
          <Field placeholder="Введіть ім'я" type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="div" />
        </label>
        <label className={css.labelName} htmlFor="number">
          Номер телефону
          <Field placeholder="Введіть номер" type="tel" name="number" />
          <ErrorMessage className={css.error} name="number" component="div" />
        </label>

        <button className={css.buttonAddContact} type="submit">
          Додати до записника
        </button>
      </Form>
    </Formik>
  );
};
