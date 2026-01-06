import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { setAuthHeader, cleanAuthHeader } from '../../helpers/axiosConfig';

export const register = createAsyncThunk('auth/register', async (user, { rejectWithValue }) => {
  try {
    const response = await axios.post('/auth/register', user);
    Notify.success('Registration successful! Please check your email to verify your account.');
    return response.data.user;
  } catch (error) {
    const serverMessage = error.response?.data?.message;

    if (error.response?.status === 409) {
      Notify.failure(serverMessage || 'User with this email already exists!');
    } else if (error.response?.status === 400) {
      if (Array.isArray(serverMessage)) {
        serverMessage.forEach(msg => Notify.failure(msg));
      } else {
        Notify.failure(serverMessage || 'Invalid data entered');
      }
    } else {
      Notify.failure('Something went wrong. Please try again.');
    }

    return rejectWithValue(error.message);
  }
});

export const verificationUser = createAsyncThunk(
  'auth/verificationUser',
  async (verificationToken, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/auth/verify/${verificationToken}`);

      Notify.success('Email verified successfully! You can now log in.');

      return data;
    } catch (error) {
      if (error.response?.status === 404) {
        Notify.failure('Verification link is invalid or has already been used.');
      }

      return rejectWithValue(error.message);
    }
  },
);

export const loginization = createAsyncThunk(
  'auth/loginization',
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post('/auth/login', user);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      if (error.response.status === 401) {
        Notify.failure(`${error.response?.data?.message ?? 'Email is not verified'}!`);
      }

      if (error.response.status === 403) {
        Notify.failure(`${error.response?.data?.message}!`);
      }

      if (error.response.status === 400) {
        error.response?.data?.message.forEach(msg => {
          Notify.failure(msg);
        });
      }
      return rejectWithValue(error.message);
    }
  },
);

export const logOut = createAsyncThunk('auth/logout', async (user, { rejectWithValue }) => {
  try {
    await axios.post('/auth/logout', user);
    cleanAuthHeader();
  } catch (e) {
    return rejectWithValue(e.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    setAuthHeader(reduxState.auth.token);
    const response = await axios.get('/auth/current');
    return response.data.user;
  },
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      return reduxState.auth.token !== null;
    },
  },
);
