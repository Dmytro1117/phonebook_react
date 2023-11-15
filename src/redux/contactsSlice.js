import { createSlice } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      if (
        state.some(
          num =>
            num.name.toLowerCase() === action.payload.name.toLowerCase() ||
            num.number === action.payload.number,
        )
      ) {
        return Notify.warning(
          `${action.payload.name} or ${action.payload.number} is already in contacts`,
        );
      }

      //1-й спосіб:
      Notify.success(`${action.payload.name}: ${action.payload.number} added successfully`);
      return [action.payload, ...state];

      // 2-й спосіб:
      // state.unshift(action.payload);
    },
    deleteContact(state, action) {
      Notify.failure(`Delete complited`);
      return state.filter(contact => contact.id !== action.payload.id);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
