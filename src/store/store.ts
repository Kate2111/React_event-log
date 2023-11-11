import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import userSlice from './slice/userSlice';
import searchSlice from './slice/searchSlice';
import checkboxSlice from './slice/checkboxSlice';

export const store = configureStore({
  reducer: {
    users: userSlice,
    search: searchSlice,
    checkbox: checkboxSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
