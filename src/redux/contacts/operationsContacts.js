import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts');
    return response.data.contacts;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (newContact, thunkAPI) => {
  try {
    const response = await axios.post('/contacts', newContact);
    return response.data.addedContact;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contact_Id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contact_Id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const toggleFavorite = createAsyncThunk(
  'contacts/toggleFavorite',
  async ({ contactId, favorite }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${contactId}/favorite`, { favorite });
      return response.data.updatedFavorite;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ contactId, formData }, thunkAPI) => {
    try {
      const response = await axios.put(`/contacts/${contactId}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data.updateContact;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
