import { FC, useState, memo } from "react";

import { Chat } from "core/entities/chat.entity";
import { Avatar } from "../../avatar";
import { RoundButton } from "../../ui/round-button";
import {
  ChatListActions,
  ChatListItemInfo,
  StyledChatListItem,
} from "./styled";

interface ChatListItemProps {
  chat: Chat;
  isSmall?: boolean;
}

export const ChatListItem: FC<ChatListItemProps> = memo(
  (props: ChatListItemProps) => {
    const { chat, isSmall } = props;

    const [isInfoShowed, setIsInfoShowed] = useState(false);

    const onMouseEnterHandler = () => {
      setIsInfoShowed(true);
    };

    const onMouseLeaveHandler = () => {
      setIsInfoShowed(false);
    };

    return (
      <StyledChatListItem
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        <ChatListItemInfo>
          <Avatar src={chat.image} label={chat.name[0]} size="28px" />
          {isSmall ? <></> : <label>{chat.name}</label>}
        </ChatListItemInfo>

        {isInfoShowed && !isSmall ? (
          <ChatListActions>
            <label>{chat.messages.at(-1)?.creationDate}</label>
            <RoundButton size="20px" padding="6px">
              <svg width="20" height="20" viewBox="0 0 20 20">
                <rect width="20" height="20" fill="none"></rect>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5.41L12.59 14H8V16H14H14.59H16V14.59V14V8H14V12.59L5.41 4L4 5.41Z"
                ></path>
              </svg>
            </RoundButton>
            <RoundButton size="20px" padding="6px">
              <svg width="20px" height="20px" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
              </svg>
            </RoundButton>
          </ChatListActions>
        ) : (
          <></>
        )}
      </StyledChatListItem>
    );
  }
);
