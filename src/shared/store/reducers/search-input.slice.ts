import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chat } from 'core/entities/chat.entity';

interface SearchInputState {
  searchScope: Chat | null;
}

const initialState: SearchInputState = {
  searchScope: null,
};

export const searchInputSlice = createSlice({
  name: 'searchInput',
  initialState,
  reducers: {
    setSearchScope(state, action: PayloadAction<Chat | null>) {
      state.searchScope = action.payload;
    },
  },
});

export default searchInputSlice.reducer;
export const searchInputActions = searchInputSlice.actions;
