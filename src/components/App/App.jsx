import React, { Component } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Contacts, Container, Title } from './App.styled';

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

  addNewContact = newContact => {
    this.setState({
      contacts: [...this.state.contacts, newContact],
    });
  };

  filterInputHandler = value => {
    this.setState({
      filter: value,
    });
  };

  deleteContact = newArr => {
    this.setState(prevState => {
      prevState.contacts = newArr;
    });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm submitHandler={this.addNewContact} contacts={contacts} />
        {contacts.length !== 0 && (
          <>
            <Contacts>Contacts</Contacts>
            <Filter
              inputHandler={this.filterInputHandler}
              deleteContact={this.deleteContact}
              contacts={contacts}
              filter={filter}
            />
            <ContactList contacts={contacts} filter={filter} />
          </>
        )}
      </Container>
    );
  }
}
