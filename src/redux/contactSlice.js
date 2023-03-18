import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare(newContact) {
        return {
          payload: {
            id: nanoid(10),
            name: newContact.name,
            number: newContact.number,
          },
        };
      },
    },

    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
