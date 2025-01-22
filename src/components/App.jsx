import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <h1 className={css.titlePage}>Телефонний записник</h1>
      <Section title={'Додати новий контакт:'}>
        <ContactForm />
      </Section>

      <Section title="Контакти:">
        <ContactFilter />
        <ContactList />
      </Section>
    </div>
  );
};
