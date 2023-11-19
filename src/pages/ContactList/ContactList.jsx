import { useSelector } from 'react-redux';
import { Section } from '../../components/Section/Section';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { Loader } from '../../components/Loader/Loader';
import { selectError, selectIsLoading } from '../../redux/selectors';
import css from './Contacts.module.css';

export default function Contactlist() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <div className={css.container}>
      <h1 className={css.titlePage}>Телефонна книга</h1>
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
}
