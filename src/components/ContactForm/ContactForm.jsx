import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { addContact } from '../../redux/operations';
import { selectAllContacts } from '../../redux/selectors';
import css from './ContactForm.module.css';

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

const initialValues = {
  name: '',
  phone: '',
};

export const ContactForm = () => {
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
      return Notify.warning(`${newContact.name} or ${newContact.phone} is already in contacts`);
    }

    Notify.success(`${newContact.name}: ${newContact.phone} added successfully`);

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
        <label className={css.labelName} htmlFor="phone">
          Номер телефону
          <Field placeholder="Введіть номер" type="tel" name="phone" />
          <ErrorMessage className={css.error} name="phone" component="div" />
        </label>

        <button className={css.buttonAddContact} type="submit">
          Додати до записника
        </button>
      </Form>
    </Formik>
  );
};
