import { FC, useState, memo } from 'react';

import { Chat } from 'core/entities/chat.entity';
import { ChatListItemContainer, CheckboxContainer, ListBody, ListContainer, ListHeader, NameContainer } from './styled';
import ChatListItem from '../chat-list-item';
import Tooltip from '../../tooltip';
import ListCheckbox from '../../ui/list-checkbox';
import RoundButton from '../../ui/round-button';
import PlusSvg from 'components/svg/plus-svg';
import ChatSvg from 'components/svg/chat-svg';

interface ChatListProps {
  name: string;
  chatItems: Chat[];
  isOpened?: boolean;
  tooltipAddText?: string;
  isOpenedHandler?: (value: boolean) => void;
  onChatItemClicked?: (id: number) => void;
}

const ChatList: FC<ChatListProps> = memo((props: ChatListProps) => {
  const { name, chatItems, tooltipAddText, isOpenedHandler, isOpened: isOpenedProp, onChatItemClicked } = props;

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
        <Tooltip text={tooltipAddText || 'Добавить'}>
          <RoundButton size="24px" padding="8px">
            <PlusSvg />
          </RoundButton>
        </Tooltip>
      </ListHeader>
      <ListBody isEmpty={!chatItems.length}>
        {isOpened ? (
          <>
            {chatItems.length ? (
              chatItems.map((chat: Chat) => (
                <ChatListItemContainer key={chat.id} onClick={() => onChatItemClickedHandler(chat.id)}>
                  <ChatListItem chat={chat} />
                </ChatListItemContainer>
              ))
            ) : (
              <>
                <ChatSvg />
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

ChatList.displayName = 'ChatList';

export default ChatList;
