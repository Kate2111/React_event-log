import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '@/types/types';
import { RootState } from '../store';
import { fetchUsers } from '../actions/actionUsers';

export interface UserState {
  loading: 'pending' | 'succeeded' | 'failed';
  error: string;
  userArray: User[];
}

const initialState: UserState = {
  loading: 'pending',
  error: '',
  userArray: [],
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = 'succeeded';
        state.userArray = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message || 'Произошла ошибка';
      });
  },
});

export const userState = (state: RootState) => state.users;
export default userSlice.reducer;
