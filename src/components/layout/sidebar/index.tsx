import { FC, memo, useCallback } from "react";

import { RoundButton } from "../../ui/round-button";
import {
  ChatListContainer,
  ChatListItemContainer,
  StyledSidebar,
} from "./styled";
import chatIco from "assets/chat.png";
import groupIco from "assets/group.png";
import meetIco from "assets/meet.png";
import { ChatList } from "../../chat/chat-list";
import { sidebarActions } from "shared/store/reducers/sidebar.slice";
import { useAppDispatch } from "shared/hooks/app-dispatch.hook";
import { useAppSelector } from "shared/hooks/app-selector.hook";
import { ChatListItem } from "../../chat/chat-list-item";
import { useNavigate } from "react-router-dom";

interface SidebarProps {}

// TODO: optimize component
export const Sidebar: FC<SidebarProps> = memo((props: SidebarProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { setIsOpened, setIsChatsOpen, setIsGroupsOpen, setIsMeetsOpen } =
    sidebarActions;

  const { isOpened, isActive, isChatsOpen, isGroupsOpen, isMeetsOpen } =
    useAppSelector((state) => state.sidebarReducer);
  const { chats } = useAppSelector((state) => state.userReducer);
  const groupChats = chats.filter((chat) => chat.isGroup);
  const privateChats = chats.filter((chat) => !chat.isGroup);

  const onChatClick = useCallback((chatId: number) => {
    navigate(`/chat/${chatId}`);
  }, []);

  const onMouseEnterHandler = useCallback(() => {
    if (!isActive) {
      dispatch(setIsOpened(true));
    }
  }, [isActive, setIsOpened]);

  const onMouseLeaveHandler = useCallback(() => {
    if (!isActive) {
      dispatch(setIsOpened(false));
    }
  }, [isActive, setIsOpened]);

  const onOpenChatsHandler = useCallback(
    (value: boolean) => {
      dispatch(setIsChatsOpen(value));
    },
    [setIsChatsOpen]
  );

  const onOpenGroupsHandler = useCallback(
    (value: boolean) => {
      dispatch(setIsGroupsOpen(value));
    },
    [setIsGroupsOpen]
  );

  const onOpenMeetsHandler = useCallback(
    (value: boolean) => {
      dispatch(setIsMeetsOpen(value));
    },
    [setIsMeetsOpen]
  );

  return (
    <StyledSidebar
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      width={isOpened ? "400px" : ""}
      position={isActive ? "relative" : "fixed"}
    >
      {isOpened ? (
        <>
          <ChatListContainer flex={isChatsOpen ? "1" : ""}>
            <ChatList
              name="Чаты"
              chatItems={privateChats}
              tooltipAddText="Начать чат"
              isOpened={isChatsOpen}
              isOpenedHandler={onOpenChatsHandler}
              onChatItemClicked={onChatClick}
            ></ChatList>
          </ChatListContainer>
          <ChatListContainer flex={isGroupsOpen ? "1" : ""}>
            <ChatList
              name="Группы"
              chatItems={groupChats}
              tooltipAddText="Создать или найти чат-группу"
              isOpened={isGroupsOpen}
              isOpenedHandler={onOpenGroupsHandler}
              onChatItemClicked={onChatClick}
            ></ChatList>
          </ChatListContainer>
          <ChatListContainer flex={isMeetsOpen ? "1" : ""}>
            <ChatList
              name="Встречи"
              chatItems={[]}
              isOpened={isMeetsOpen}
              isOpenedHandler={onOpenMeetsHandler}
              onChatItemClicked={onChatClick}
            ></ChatList>
          </ChatListContainer>
        </>
      ) : (
        <>
          <RoundButton size="24px" padding="8px">
            <img src={chatIco} width="24px" height="24px" />
          </RoundButton>
          <ChatListContainer flex={isChatsOpen ? "1" : ""}>
            {isChatsOpen ? (
              privateChats.map((chat) => (
                <ChatListItemContainer key={chat.id}>
                  <ChatListItem chat={chat} isSmall={true} />
                </ChatListItemContainer>
              ))
            ) : (
              <></>
            )}
          </ChatListContainer>
          <RoundButton size="24px" padding="8px">
            <img src={groupIco} width="24px" height="24px" />
          </RoundButton>
          <ChatListContainer flex={isGroupsOpen ? "1" : ""}>
            {isGroupsOpen ? (
              groupChats.map((chat) => (
                <ChatListItemContainer key={chat.id}>
                  <ChatListItem chat={chat} isSmall={true} />
                </ChatListItemContainer>
              ))
            ) : (
              <></>
            )}
          </ChatListContainer>
          <RoundButton size="24px" padding="8px">
            <img src={meetIco} width="24px" height="24px" />
          </RoundButton>
          <ChatListContainer flex={isMeetsOpen ? "1" : ""}></ChatListContainer>
        </>
      )}
    </StyledSidebar>
  );
});
