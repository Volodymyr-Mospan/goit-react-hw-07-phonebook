import React, { useEffect } from 'react';
import { ContactForm, ContactList, Filter } from 'components/Contacts/';
import { StyledApp } from 'components/App.styled';
import { fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useGetContactsQuery } from 'redux/contactSlice';

export const App = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  const { data, error, isFetching } = useGetContactsQuery();

  return (
    <StyledApp>
      <div className={'container'}>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>

      <div className={'container'}>
        <h2>Contacts</h2>
        <Filter />
        {isFetching && !error && <b>Request in progress...</b>}
        {!isFetching && error && <b>{error}</b>}
        {!!data && <ContactList contacts={data} />}
      </div>
    </StyledApp>
  );
};
