import { createSelector } from '@reduxjs/toolkit';

export const selectAllContacts = state => state.contacts.items;
export const selectSortContacts = state => state.filter;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;

export const selectVisibleContacts = createSelector(
  [selectAllContacts, selectSortContacts],
  (contacts, filter) => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
  },
);

// без мемоізації:

// export const selectVisibleContacts = state => {
//   const contacts = selectAllContacts(state);
//   const sortedContacts = selectSortContacts(state);
//   const filterContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(sortedContacts.toLowerCase()),
//   );
//   console.log(filterContacts);
//   return filterContacts;
// };
