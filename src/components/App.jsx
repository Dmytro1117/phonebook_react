import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader/Loader';
import { fetchContacts } from '../redux/operations';
import { selectError, selectIsLoading } from '../redux/selectors';
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.titlePage}>Телефонна книжка</h1>
      <Section title={'Додати новий контакт:'}>
        <ContactForm />
      </Section>

      <Section title="Ваші контакти:">
        <Filter />
        {isLoading && !error && <Loader />}
        <ContactList />
      </Section>
    </div>
  );
};
