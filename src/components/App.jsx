import React from 'react';
import { ContactForm, ContactList, Filter } from 'components/Contacts/';
import { StyledApp } from 'components/App.styled';

export const App = () => {
  return (
    <StyledApp>
      <div className={'container'}>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>

      <div className={'container'}>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </StyledApp>
  );
};
