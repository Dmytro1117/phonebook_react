import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  loginization,
  logOut,
  refreshUser,
  verificationUser,
  updateAvatar,
} from './operationsAuth';
import { addContact, deleteContact } from '../contacts/operationsContacts';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null, avatar: null },
    token: null,
    isLoaggedIn: false,
    isRefreshing: false,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(register.rejected, handleRejected)
      .addCase(verificationUser.pending, handlePending)
      .addCase(verificationUser.fulfilled, (state, _) => {
        state.isLoading = false;
      })
      .addCase(verificationUser.rejected, handleRejected)

      .addCase(loginization.pending, handlePending)
      .addCase(loginization.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoaggedIn = true;
        state.isLoading = false;
      })
      .addCase(loginization.rejected, handleRejected)

      .addCase(updateAvatar.pending, handlePending)
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user.avatar = action.payload;
      })
      .addCase(updateAvatar.rejected, handleRejected)

      .addCase(addContact.fulfilled, (state, action) => {
        if (action.payload.owner?.subscription) {
          state.user.subscription = action.payload.owner.subscription;
        }
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        if (action.payload.newSubscription) {
          state.user.subscription = action.payload.newSubscription;
        }
      })

      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoaggedIn = false;
        state.isRefreshing = false;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(logOut.rejected, handleRejected)

      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isRefreshing = false;
        state.isLoaggedIn = true;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
      });
  },
});

export const authReduser = authSlice.reducer;
