import { FC } from "react";
import { Chat } from "../../core/entities/chat.entity";
import { StyledChatListItem } from "./styled";

interface ChatListItemProps {
  chat: Chat;
}

export const ChatListItem: FC<ChatListItemProps> = (
  props: ChatListItemProps
) => {
  return <StyledChatListItem>{props.chat.name}</StyledChatListItem>;
};
