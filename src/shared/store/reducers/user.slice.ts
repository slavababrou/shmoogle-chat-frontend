import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Chat } from 'core/entities/chat.entity';
import { User } from 'core/entities/user.entity';

interface UserState {
  user: User | null;
  chats: Chat[];
}

const initialState: UserState = {
  user: null,
  chats: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchLoggedUser(state) {
      state;
    },

    setLoggedUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload;
    },

    fetchUserChats(state) {
      state;
    },

    setUserChats(state, action: PayloadAction<Chat[]>) {
      state.chats = action.payload;
    },
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
