import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',

  reducers: {
    sortContact(state, action) {
      return (state = action.payload);
    },
  },
});

export const { sortContact } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
