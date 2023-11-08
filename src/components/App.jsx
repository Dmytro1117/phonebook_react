import { useState, useEffect } from 'react';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('localContacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('localContacts', JSON.stringify(contacts));
  }, [contacts]);

  const handlerSubmitForm = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.some(
        num =>
          num.name.toLowerCase() === contact.name.toLowerCase() || num.number === contact.number,
      )
    ) {
      return Notify.warning(`${name} or ${number} is already in contacts`);
    }

    setContacts([contact, ...contacts]);
    Notify.success(`${name}: ${number} added successfully`);
  };

  const handlerFindContact = e => {
    setFilter(e.currentTarget.value);
  };

  const filtrContacts = () => {
    return contacts.filter(cont => cont.name.toLowerCase().includes(filter.toLowerCase()));
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
    Notify.failure(`Delete complited`);
    setFilter('');
  };

  return (
    <div className={css.container}>
      <h1 className={css.titlePage}>Телефонна книжка</h1>
      <Section title={'Додати новий контакт:'}>
        <ContactForm onSendForApp={handlerSubmitForm} />
      </Section>

      <Section title="Ваші контакти:">
        <Filter text={filter} filterInput={handlerFindContact} />
        <ContactList find={filtrContacts()} deleteContact={deleteContact} />
      </Section>
    </div>
  );
};
