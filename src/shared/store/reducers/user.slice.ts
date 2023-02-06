import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Chat } from 'core/entities/chat.entity';
import { Dm } from 'core/entities/dm.entity';
import { User } from 'core/entities/user.entity';

interface UserState {
  user: User | null;
  isUserLoading: boolean;
  chats: Chat[];
  isChatLoading: boolean;
  dms: Dm[];
  isDmLoading: boolean;
}

const initialState: UserState = {
  user: null,
  isUserLoading: false,
  chats: [],
  isChatLoading: false,
  dms: [],
  isDmLoading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchLoggedUser(state) {
      state.isUserLoading = true;
    },

    setLoggedUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload;
      state.isUserLoading = false;
    },

    fetchUserChats(state) {
      state.isChatLoading = true;
    },

    setUserChats(state, action: PayloadAction<Chat[]>) {
      state.chats = action.payload;
      state.isChatLoading = false;
    },

    fetchUserDms(state) {
      state.isDmLoading = true;
    },

    setUserDms(state, action: PayloadAction<Dm[]>) {
      state.dms = action.payload;
      state.isDmLoading = false;
    },
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
