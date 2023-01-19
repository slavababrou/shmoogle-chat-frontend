import { ChangeEvent, FC, useId, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { routes } from 'core/constants/routes';
import { Chat } from 'core/entities/chat.entity';
import { useAppSelector } from 'shared/hooks/app-selector.hook';
import ChatRoom from 'components/chat-room';
import ListCheckbox from 'components/ui/list-checkbox';
import OptionRadio from 'components/ui/option-radiobutton';
import RoundButton from 'components/ui/round-button';
import {
  ChatPageBody,
  ChatPageFlexContainer,
  ChatPageHeader,
  StyledChatPage,
  ChatHeader,
  ChatPageBodyOptions,
  ChatPageBodyContent,
} from './styled';
import LeftArrowSvg from 'components/svg/left-arrow-svg';
import SearchSvg from 'components/svg/search-svg';
import ChatFilledSvg from 'components/svg/chat-filled-svg';
import CrossArrowsSvg from 'components/svg/cross-arrows-svg';

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

export const ChatPage: FC = () => {
  const radioName = useId();
  const { id } = useParams();
  const { chats } = useAppSelector((state) => state.userReducer);
  const [currentOption, setCurrentOption] = useState(ChatPageOption.chat);

  const onOptionChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
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
          <LeftArrowSvg />
        </RoundButton>

        <ChatPageFlexContainer width="100%" justifyContent="space-between" alignItems="center">
          <ChatHeader>
            <div>
              {chat.name}
              <ListCheckbox initialValue={true} />
            </div>
            <label>{chat.users.length} участник</label>
          </ChatHeader>
          <ChatPageFlexContainer>
            <RoundButton size="24px" padding="8px">
              <SearchSvg />
            </RoundButton>
            <RoundButton size="24px" padding="8px">
              <CrossArrowsSvg />
            </RoundButton>
            <RoundButton size="24px" padding="8px">
              <ChatFilledSvg size={24} fill="#000" />
              {/* <svg width="24px" height="24px" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H4V4h16v12zM6 12h8v2H6zm0-3h12v2H6zm0-3h12v2H6z"></path>
                <path fill="none" d="M0 0h24v24H0V0z"></path>
              </svg> */}
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

        <ChatPageBodyContent>{renderSwitch(currentOption, chat)}</ChatPageBodyContent>
      </ChatPageBody>
    </StyledChatPage>
  );
};
