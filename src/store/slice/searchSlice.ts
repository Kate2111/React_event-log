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
      state.searchResults = action.payload;
    },
  },
});

export const { setSearchResults } = searchSlice.actions;
export const searchState = (state: RootState) => state.search;
export default searchSlice.reducer;
