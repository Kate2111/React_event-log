import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { User } from '@/types/types';

interface CheckboxState {
  selectedUsers: User[] | null;
}

const initialState: CheckboxState = {
  selectedUsers: null,
};

const checkboxSlice = createSlice({
  name: 'checkbox',
  initialState,
  reducers: {
    setSelectedUsers: (state, action: PayloadAction<User[]>) => {
      state.selectedUsers = action.payload;
    },
  },
});

export const { setSelectedUsers } = checkboxSlice.actions;
export const checkboxState = (state: RootState) => state.checkbox;
export default checkboxSlice.reducer;
