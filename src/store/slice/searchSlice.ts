import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/types/types';
import { RootState } from '../store';

export interface NewUser extends User {
  selected: boolean;
}

interface SearchState {
  searchResults: NewUser[];
}

const initialSearchState: SearchState = {
  searchResults: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState: initialSearchState,
  reducers: {
    setSearchResults: (state, action: PayloadAction<User[]>) => {
      state.searchResults = action.payload.map((user) => ({ ...user, selected: true }));
    },
    toggleSelectedUser: (state, action: PayloadAction<string>) => {
      const userId = action.payload;
      state.searchResults = state.searchResults.map((user) =>
        user.id === userId ? { ...user, selected: !user.selected } : user,
      );
    },
  },
});

export const { setSearchResults, toggleSelectedUser } = searchSlice.actions;
export const searchState = (state: RootState) => state.search;
export default searchSlice.reducer;
