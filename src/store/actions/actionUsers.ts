import { usersService } from '@/API/UsersService';
import { User } from '@/types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk<User[]>('users/fetchUsersStatus', async () => {
  const response = await usersService();
  if (response === null) {
    throw new Error('Произошла ошибка. Проверь URL');
  }
  return response;
});
