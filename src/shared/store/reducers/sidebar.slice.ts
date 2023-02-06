import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Chat } from 'core/entities/chat.entity';

interface SidebarState {
  isOpened: boolean;
  isActive: boolean;
  isChatsOpen: boolean;
  isGroupsOpen: boolean;
  isMeetsOpen: boolean;
}

const initialState: SidebarState = {
  isOpened: false,
  isActive: false,
  isChatsOpen: false,
  isGroupsOpen: false,
  isMeetsOpen: false,
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setIsOpened(state, action: PayloadAction<boolean>) {
      state.isOpened = action.payload;
    },
    setIsActive(state, action: PayloadAction<boolean>) {
      state.isActive = action.payload;
    },
    setIsChatsOpen(state, action: PayloadAction<boolean>) {
      state.isChatsOpen = action.payload;
    },
    setIsGroupsOpen(state, action: PayloadAction<boolean>) {
      state.isGroupsOpen = action.payload;
    },
    setIsMeetsOpen(state, action: PayloadAction<boolean>) {
      state.isMeetsOpen = action.payload;
    },
  },
});

export default sidebarSlice.reducer;
export const sidebarActions = sidebarSlice.actions;
