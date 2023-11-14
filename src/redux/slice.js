import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contact: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },

  reducers: {
    addContact(state, action) {
      if (
        state.contact.some(
          num =>
            num.name.toLowerCase() === action.payload.contact.name.toLowerCase() ||
            num.number === action.payload.contact.number,
        )
      ) {
        return Notify.warning(
          `${action.payload.contact.name} or ${action.payload.contact.number} is already in contacts`,
        );
      }
      //1-й спосіб:
      state.contact = [action.payload.contact, ...state.contact];
      // 2-й спосіб:
      // state.contact.unshift(action.payload.contact);

      Notify.success(
        `${action.payload.contact.name}: ${action.payload.contact.number} added successfully`,
      );
    },
    deleteContact(state, action) {
      state.contact = state.contact.filter(contact => contact.id !== action.payload.id);
      Notify.failure(`Delete complited`);
      state.filter = '';
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'telephoneContacts',
  storage,
  blacklist: ['filter'],
};

export const persistedContactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const { setFilter, addContact, deleteContact } = contactsSlice.actions;
export const getContacts = state => state.contacts.contact;
export const getFilter = state => state.contacts.filter;
export default contactsSlice.reducer;
