import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  // reducers: {
  //   fetchingInProgress(state) {
  //     state.isLoading = true;
  //   },
  //   fetchingSuccess(state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   fetchingError(state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },

  //   addContact: {
  //     reducer(state, action) {
  //       return {
  //         items: [...state.items, action.payload],
  //         isLoading: false,
  //         error: null,
  //       };
  //       // return [...state, action.payload];
  //     },
  //     prepare(newContact) {
  //       return {
  //         payload: {
  //           id: nanoid(10),
  //           name: newContact.name,
  //           number: newContact.number,
  //         },
  //       };
  //     },
  //   },

  //   deleteContact(state, action) {
  //     return state.filter(contact => contact.id !== action.payload);
  //   },
  // },
});

// export const {
//   addContact,
//   deleteContact,
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
