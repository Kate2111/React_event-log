import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/types/types';
import { RootState } from '../store';

interface SearchState {
  searchResults: User[];
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
    addNewEvent: (state, action: PayloadAction<User>) => {
      const findItem = state.searchResults.find((item) => item.id === action.payload.id);

      if (!findItem) {
        state.searchResults.unshift(action.payload);
      }
    },
  },
});

export const { setSearchResults, addNewEvent } = searchSlice.actions;
export const searchState = (state: RootState) => state.search;
export default searchSlice.reducer;
