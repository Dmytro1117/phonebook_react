import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <h1 className={css.titlePage}>Телефонна книжка</h1>
      <Section title={'Додати новий контакт:'}>
        <ContactForm />
      </Section>

      <Section title="Ваші контакти:">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
};
