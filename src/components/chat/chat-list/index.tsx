import { FC, useState, memo } from "react";

import { Chat } from "core/entities/chat.entity";
import { ChatListItem } from "../chat-list-item";
import { Tooltip } from "../../tooltip";
import { ListCheckbox } from "../../ui/list-checkbox";
import { RoundButton } from "../../ui/round-button";
import {
  ChatListItemContainer,
  CheckboxContainer,
  ListBody,
  ListContainer,
  ListHeader,
  NameContainer,
} from "./styled";

interface ChatListProps {
  name: string;
  chatItems: Chat[];
  isOpened?: boolean;
  tooltipAddText?: string;
  isOpenedHandler?: (value: boolean) => void;
  onChatItemClicked?: (id: number) => void;
}

export const ChatList: FC<ChatListProps> = memo((props: ChatListProps) => {
  const {
    name,
    chatItems,
    tooltipAddText,
    isOpenedHandler,
    isOpened: isOpenedProp,
    onChatItemClicked,
  } = props;

  const [isOpened, setIsOpened] = useState(isOpenedProp ?? false);

  const onOpenHandler = (event: any) => {
    setIsOpened(event.target.checked);
    if (isOpenedHandler) {
      isOpenedHandler(event.target.checked);
    }
  };

  const onChatItemClickedHandler = (id: number) => {
    if (onChatItemClicked) {
      onChatItemClicked(id);
    }
  };

  return (
    <ListContainer>
      <ListHeader>
        <CheckboxContainer>
          <ListCheckbox onChecked={onOpenHandler} initialValue={isOpened} />
        </CheckboxContainer>

        <NameContainer>{name}</NameContainer>
        <Tooltip text={tooltipAddText || "Добавить"}>
          <RoundButton size="24px" padding="8px">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />{" "}
            </svg>
          </RoundButton>
        </Tooltip>
      </ListHeader>
      <ListBody isEmpty={!chatItems.length}>
        {isOpened ? (
          <>
            {chatItems.length ? (
              chatItems.map((chat: Chat) => (
                <ChatListItemContainer
                  key={chat.id}
                  onClick={() => onChatItemClickedHandler(chat.id)}
                >
                  <ChatListItem chat={chat} />
                </ChatListItemContainer>
              ))
            ) : (
              <>
                <svg width="24px" height="24px" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0V0z" fill="none"></path>
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H4V4h16v12z"></path>
                </svg>
                <label>Здесь пока ничего нет.</label>
                <a>Найти чат</a>
              </>
            )}
          </>
        ) : (
          <></>
        )}
      </ListBody>
    </ListContainer>
  );
});
