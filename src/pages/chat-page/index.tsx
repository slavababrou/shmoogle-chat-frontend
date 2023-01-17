import { FC, useId, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

import { ChatRoom } from "components/chat-room";
import { ListCheckbox } from "components/ui/list-checkbox";
import { OptionRadio } from "components/ui/option-radiobutton";
import { RoundButton } from "components/ui/round-button";
import { routes } from "core/constants/routes";
import { useAppSelector } from "shared/hooks/app-selector.hook";
import {
  ChatPageBody,
  ChatPageFlexContainer,
  ChatPageHeader,
  StyledChatPage,
  ChatHeader,
  ChatPageBodyOptions,
  ChatPageBodyContent,
} from "./styled";
import { Chat } from "core/entities/chat.entity";

enum ChatPageOption {
  chat = 1,
  files,
  tasks,
}

function renderSwitch(option: ChatPageOption, chat: Chat) {
  switch (option) {
    case ChatPageOption.chat:
      return <ChatRoom chat={chat}></ChatRoom>;
    case ChatPageOption.files:
      return <></>;
    case ChatPageOption.tasks:
      return <></>;
    default:
      return <></>;
  }
}

export const ChatPage: FC<{}> = () => {
  const radioName = useId();
  const { id } = useParams();
  const { chats } = useAppSelector((state) => state.userReducer);
  const [currentOption, setCurrentOption] = useState(ChatPageOption.chat);

  const onOptionChangeHandler = (event: any) => {
    const { value } = event.target;
    if (+value in ChatPageOption) {
      setCurrentOption(+value);
    }
  };

  if (!id) {
    return <Navigate to={routes.welcome} />;
  }
  const chat = chats.find((item) => item.id === +id);

  if (!chat) {
    return <Navigate to={routes.welcome} />;
  }

  return (
    <StyledChatPage>
      <ChatPageHeader>
        <RoundButton size="24px" padding="8px">
          <svg width="24px" height="24px" viewBox="0 0 24 24">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
            <path fill="none" d="M0 0h24v24H0z"></path>
          </svg>
        </RoundButton>

        <ChatPageFlexContainer
          width="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <ChatHeader>
            <div>
              {chat.name}
              <ListCheckbox initialValue={true} />
            </div>
            <label>{chat.users.length} участник</label>
          </ChatHeader>
          <ChatPageFlexContainer>
            <RoundButton size="24px" padding="8px">
              <svg width="24px" height="24px" viewBox="0 0 24 24">
                <path d="M20.7,19.3L15,13.5c0.8-1.1,1.2-2.4,1.2-3.8c0-3.6-2.9-6.5-6.5-6.5S3.3,6.2,3.3,9.8s2.9,6.5,6.5,6.5  c1.4,0,2.7-0.5,3.8-1.2l5.7,5.7L20.7,19.3z M5.3,9.8c0-2.5,2-4.5,4.5-4.5s4.5,2,4.5,4.5s-2,4.5-4.5,4.5S5.3,12.2,5.3,9.8z"></path>
              </svg>
            </RoundButton>
            <RoundButton size="24px" padding="8px">
              <svg height="24" viewBox="0 0 24 24" width="24">
                <rect fill="none" height="24" width="24"></rect>
                <path d="M15.41,10H20v2h-8V4h2v4.59L20.59,2L22,3.41L15.41,10z M4,12v2h4.59L2,20.59L3.41,22L10,15.41V20h2v-8H4z"></path>
              </svg>
            </RoundButton>
            <RoundButton size="24px" padding="8px">
              <svg width="24px" height="24px" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H4V4h16v12zM6 12h8v2H6zm0-3h12v2H6zm0-3h12v2H6z"></path>
                <path fill="none" d="M0 0h24v24H0V0z"></path>
              </svg>
            </RoundButton>
          </ChatPageFlexContainer>
        </ChatPageFlexContainer>
      </ChatPageHeader>
      <ChatPageBody>
        <ChatPageBodyOptions>
          <ChatPageFlexContainer>
            <OptionRadio
              name={radioName}
              value={ChatPageOption.chat}
              checked={currentOption === ChatPageOption.chat}
              onChange={onOptionChangeHandler}
            >
              Чат
            </OptionRadio>
            <OptionRadio
              name={radioName}
              value={ChatPageOption.files}
              //checked={currentOption === ChatPageOption.files}
              onChange={onOptionChangeHandler}
            >
              Файлы
            </OptionRadio>
            <OptionRadio
              name={radioName}
              value={ChatPageOption.tasks}
              //checked={currentOption === ChatPageOption.tasks}
              onChange={onOptionChangeHandler}
            >
              Задачи
            </OptionRadio>
          </ChatPageFlexContainer>
        </ChatPageBodyOptions>

        <ChatPageBodyContent>
          {renderSwitch(currentOption, chat)}
        </ChatPageBodyContent>
      </ChatPageBody>
    </StyledChatPage>
  );
};
