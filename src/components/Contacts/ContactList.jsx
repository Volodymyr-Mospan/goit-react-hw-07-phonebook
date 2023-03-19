import React from 'react';
import { Contact } from 'components/Contacts/';
import { ContactListStyled, ContactStyled } from 'components/Contacts/';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

export const ContactList = ({ contacts }) => {
  // const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ContactListStyled>
      {contacts
        .map(contact => (
          <ContactStyled key={contact.id}>
            <Contact contact={contact} />
          </ContactStyled>
        ))
        .reverse()}
    </ContactListStyled>
  );
};
