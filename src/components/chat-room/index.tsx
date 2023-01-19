import { FC, useEffect, useState, memo, useRef } from 'react';

import { Message } from 'core/entities/message.entity';
import { Chat } from 'core/entities/chat.entity';
import { MessageService } from 'shared/services/message.service';
import { StyledChatRoom, ChatRoomViewBox, ChatRoomFormContainer, ChatRoomContent } from './styled';
import ChatRoomForm from './chat-form';
import MessageList from 'components/message/message-list';
import ChatGroupGreeter from './chat-group-greeter';

interface ChatRoomProps {
  chat: Chat;
}

async function fetchMessages(chatId: number) {
  return MessageService.Instance.getAll(chatId);
}

const ChatRoom: FC<ChatRoomProps> = memo((props: ChatRoomProps) => {
  const { chat } = props;

  const [messages, setMessages] = useState<Message[]>([]);
  const [scrolledProgress, setScrolledProgress] = useState(0);
  const contentRef: any = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchMessages(chat.id).then((result) => {
      setMessages(result);
    });
  }, [chat]);

  const onScrollHandler = () => {
    const scroll = contentRef.current.scrollTop;
    const height = contentRef.current.scrollHeight - contentRef.current.clientHeight;
    const currentScrolled = (scroll / height) * 100;
    setScrolledProgress(currentScrolled);
  };

  return (
    <StyledChatRoom>
      <ChatRoomViewBox ref={contentRef} onScroll={onScrollHandler}>
        <ChatRoomContent>
          {chat.isGroup ? <ChatGroupGreeter chat={chat} /> : <></>}
          <MessageList messages={messages} />
        </ChatRoomContent>
      </ChatRoomViewBox>
      <ChatRoomFormContainer showShadow={scrolledProgress < 90}>
        <ChatRoomForm />
      </ChatRoomFormContainer>
    </StyledChatRoom>
  );
});

ChatRoom.displayName = 'ChatRoom';

export default ChatRoom;
