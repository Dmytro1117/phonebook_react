import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL, setAuthHeader, cleanAuthHeader } from '../../helpers/axiosConfig';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const register = createAsyncThunk('auth/register', async (user, { rejectWithValue }) => {
  try {
    const response = await axios.post('/auth/register', user);
    Notify.success('Registration successful! Please check your email to verify your account.');
    return response.data.user;
  } catch (error) {
    if (error.response.status === 409 || error.response.status === 400) {
      error.response?.data?.message.forEach(msg => {
        Notify.failure(msg);
      });
    }

    return rejectWithValue(error.message);
  }
});

export const verificationUser = createAsyncThunk(
  'auth/verificationUser',
  async (verificationToken, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/auth/verify/${verificationToken}`);
      Notify.success(`${data.message}!`);
      return data;
    } catch (error) {
      if (error.response.status === 404) {
        Notify.failure(`${error.response?.data?.message}!`);
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

// export const refreshUser = createAsyncThunk(
//   'auth/refreshUser',
//   async (_, { getState, rejectWithValue }) => {
//     const { token } = getState().auth;
//     token && setAuthHeader(token);

//     try {
//       const response = await axios.get('/users/current');
//       return response.data;
//     } catch (e) {
//       return rejectWithValue(e.message);
//     }
//   },
// );
