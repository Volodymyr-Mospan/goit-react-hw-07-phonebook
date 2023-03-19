import { configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsApi, contactsSlice } from './contactSlice';
import { filterSlice } from './filterSlice';

// const rootReducer = combineReducers({
//   contacts: contactsSlice.reducer,
//   filter: filterSlice.reducer,
// });

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

// setupListeners(store.dispatch);
