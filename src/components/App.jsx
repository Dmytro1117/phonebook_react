import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handlerSubmitForm = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.state.contacts.some(
      num => num.name.toLowerCase() === contact.name.toLowerCase() || num.number === contact.number,
    )
      ? alert(`${name} or ${number} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  handlerFindContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filtrContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(cont => cont.name.toLowerCase().includes(normalizedFilter));
  };

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <div className={css.container}>
        <h1 className={css.titlePage}>Телефонна книжка</h1>
        <Section title={'Додати новий контакт:'}>
          <ContactForm onSendForApp={this.handlerSubmitForm} />
        </Section>

        <Section title="Ваші контакти:">
          <Filter text={this.state.filter} filterInput={this.handlerFindContact} />
          <ContactList find={this.filtrContacts()} deleteContact={this.deleteContact} />
        </Section>
      </div>
    );
  }
}
