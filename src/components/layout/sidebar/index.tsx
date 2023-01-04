import { FC, useState } from "react";
import { RoundButton } from "../../ui/round-button";
import { ChatListContainer, StyledSidebar } from "./styled";
import chatIco from "../../../assets/chat.png";
import groupIco from "../../../assets/group.png";
import meetIco from "../../../assets/meet.png";
import { ChatList } from "../../chat-list";

interface SidebarProps {
  isSidebarOpen?: boolean;
}

// TODO: optimize component
export const Sidebar: FC<SidebarProps> = (props: SidebarProps) => {
  const { isSidebarOpen: propIsSidebarOpen } = props;

  const [isSidebarOpen, setIsSidebarOpen] = useState(
    propIsSidebarOpen ?? false
  );

  const [isChatsOpen, setIsChatsOpen] = useState(false);
  const [isGroupsOpen, setIsGroupsOpen] = useState(false);
  const [isMeetsOpen, setIsMeetsOpen] = useState(false);

  const onMouseOverHandler = () => {
    setIsSidebarOpen(true);
  };

  const onMouseOutHandler = () => {
    setIsSidebarOpen(false);
  };

  return (
    <StyledSidebar
      onMouseOver={onMouseOverHandler}
      onMouseOut={onMouseOutHandler}
      width={isSidebarOpen ? "400px" : ""}
    >
      {isSidebarOpen ? (
        <>
          <ChatListContainer flex={isChatsOpen ? "1" : ""}>
            <ChatList
              name="Чаты"
              chatItems={[]}
              isOpened={isChatsOpen}
              isOpenedHandler={setIsChatsOpen}
            ></ChatList>
          </ChatListContainer>
          <ChatListContainer flex={isGroupsOpen ? "1" : ""}>
            <ChatList
              name="Группы"
              chatItems={[]}
              isOpened={isGroupsOpen}
              isOpenedHandler={setIsGroupsOpen}
            ></ChatList>
          </ChatListContainer>
          <ChatListContainer flex={isMeetsOpen ? "1" : ""}>
            <ChatList
              name="Встречи"
              chatItems={[]}
              isOpened={isMeetsOpen}
              isOpenedHandler={setIsMeetsOpen}
            ></ChatList>
          </ChatListContainer>
        </>
      ) : (
        <>
          <RoundButton size="24px" padding="8px">
            <img src={chatIco} width="24px" height="24px" />
          </RoundButton>
          <ChatListContainer flex={isChatsOpen ? "1" : ""}></ChatListContainer>
          <RoundButton size="24px" padding="8px">
            <img src={groupIco} width="24px" height="24px" />
          </RoundButton>
          <ChatListContainer flex={isGroupsOpen ? "1" : ""}></ChatListContainer>
          <RoundButton size="24px" padding="8px">
            <img src={meetIco} width="24px" height="24px" />
          </RoundButton>
          <ChatListContainer flex={isMeetsOpen ? "1" : ""}></ChatListContainer>
        </>
      )}
    </StyledSidebar>
  );
};
