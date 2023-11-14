import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { User } from '@/types/types';

interface SelectedState {
  selectedUsers: User[] | null;
}

const initialState: SelectedState = {
  selectedUsers: null,
};

const selectedSlice = createSlice({
  name: 'selected',
  initialState,
  reducers: {
    setSelectedUsers: (state, action: PayloadAction<User[]>) => {
      state.selectedUsers = action.payload;
    },
    toggleSelectedUser: (state, action: PayloadAction<User>) => {
      const existingUser = state.selectedUsers?.find((user) => user.id === action.payload.id);

      if (existingUser && state.selectedUsers) {
        state.selectedUsers = state.selectedUsers?.filter((user) => user.id !== action.payload.id);
      } else {
        state.selectedUsers = state.selectedUsers
          ? [...state.selectedUsers, action.payload]
          : [action.payload];
      }
    },
  },
});

export const { setSelectedUsers, toggleSelectedUser } = selectedSlice.actions;
export const selectedState = (state: RootState) => state.selected;
export default selectedSlice.reducer;
