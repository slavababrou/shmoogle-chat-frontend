import { FC, useState, memo } from 'react';

import { Chat } from 'core/entities/chat.entity';
import { ChatListActions, ChatListItemInfo, StyledChatListItem } from './styled';
import Avatar from '../../avatar';
import RoundButton from '../../ui/round-button';
import DiagonalArrowSvg from 'components/svg/diagonal-arrow-svg';
import OptionDotsSvg from 'components/svg/option-dots-svg';

interface ChatListItemProps {
  chat: Chat;
  isSmall?: boolean;
}

const ChatListItem: FC<ChatListItemProps> = memo((props: ChatListItemProps) => {
  const { chat, isSmall } = props;

  const [isInfoShowed, setIsInfoShowed] = useState(false);

  const onMouseEnterHandler = () => {
    setIsInfoShowed(true);
  };

  const onMouseLeaveHandler = () => {
    setIsInfoShowed(false);
  };

  return (
    <StyledChatListItem onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
      <ChatListItemInfo>
        <Avatar src={chat.image} label={chat.name[0]} size="28px" />
        {isSmall ? <></> : <label>{chat.name}</label>}
      </ChatListItemInfo>

      {isInfoShowed && !isSmall ? (
        <ChatListActions>
          <label>{chat.messages.at(-1)?.creationDate}</label>
          <RoundButton size="20px" padding="6px">
            <DiagonalArrowSvg />
          </RoundButton>
          <RoundButton size="20px" padding="6px">
            <OptionDotsSvg />
          </RoundButton>
        </ChatListActions>
      ) : (
        <></>
      )}
    </StyledChatListItem>
  );
});

ChatListItem.displayName = 'ChatListItem';

export default ChatListItem;
