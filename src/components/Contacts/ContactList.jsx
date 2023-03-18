import React from 'react';
import { Contact } from 'components/Contacts/';
import { ContactListStyled, ContactStyled } from 'components/Contacts/';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

const getFilteredContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.number.toLowerCase().includes(normalizedFilter)
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getFilteredContacts(contacts, filter);

  return (
    <ContactListStyled>
      {visibleContacts.map(contact => (
        <ContactStyled key={contact.id}>
          <Contact contact={contact} />
        </ContactStyled>
      ))}
    </ContactListStyled>
  );
};
