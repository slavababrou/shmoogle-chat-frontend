import { FC, memo } from 'react';
import { Navigate } from 'react-router-dom';

import { Chat } from 'core/entities/chat.entity';
import { routes } from 'core/constants/routes';
import { useAppSelector } from 'shared/hooks/app-selector.hook';
import { transformDate } from 'shared/utils/transform-date';
import chatImage from 'assets/new_chat_room.png';
import {
  ChatGroupAction,
  ChatGroupActionContainer,
  ChatGroupGreeterDate,
  ChatGroupGreeterHistoryInfo,
  ChatGroupGreeterHistoryWho,
  StyledChatGroupGreeter,
} from './styled';
import ButtonWithIcon from 'components/ui/with-icon-button';
import ChatHistorySvg from 'components/svg/chat-history-svg';
import AddUserSvg from 'components/svg/add-user-svg';
import ShareFileSvg from 'components/svg/share-file-svg';
import AddTasksSvg from 'components/svg/add-tasks-svg';

interface ChatGroupGreeterProps {
  chat: Chat;
}

const ChatGroupGreeter: FC<ChatGroupGreeterProps> = memo((props: ChatGroupGreeterProps) => {
  const { user } = useAppSelector((state) => state.userReducer);

  if (!user) {
    return <Navigate to={routes.welcome} />;
  }

  const { chat } = props;
  const userId = user.id;
  const creator = chat.users.find((user) => userId === user.id);
  const [, , weekDay, monthDay, month] = transformDate(chat.creationDate);

  return (
    <StyledChatGroupGreeter>
      <img src={chatImage} width="160" height="160" />
      <ChatGroupGreeterDate>
        {chat.creatorId === userId
          ? `Вы создали эту чат группу ${weekDay},${monthDay} ${month}.`
          : `${creator?.username} создал эту чат группу ${weekDay},${monthDay} ${month}.`}
      </ChatGroupGreeterDate>
      <ChatGroupActionContainer>
        <ChatGroupAction>
          <ButtonWithIcon name="Добавить пользователей">
            <AddUserSvg />
          </ButtonWithIcon>
        </ChatGroupAction>
        <ChatGroupAction>
          <ButtonWithIcon name="Поделиться файлом">
            <ShareFileSvg />
          </ButtonWithIcon>
        </ChatGroupAction>
        <ChatGroupAction>
          <ButtonWithIcon name="Назначить задачи">
            <AddTasksSvg />
          </ButtonWithIcon>
        </ChatGroupAction>
      </ChatGroupActionContainer>
      <div>
        {chat.isHistorySaved ? (
          <>
            <ChatGroupGreeterHistoryWho>
              <ChatHistorySvg size="20px" />
              {'История включена\n'}
            </ChatGroupGreeterHistoryWho>
            <ChatGroupGreeterHistoryInfo>
              Если история чата включена, отправленные сообщения сохраняются.
            </ChatGroupGreeterHistoryInfo>
          </>
        ) : (
          <>
            <ChatGroupGreeterHistoryWho>
              <ChatHistorySvg size="20px" />
              {chat.creatorId === userId ? 'Вы выключили историю\n' : `${creator?.username} выключил историю`}
            </ChatGroupGreeterHistoryWho>
            <ChatGroupGreeterHistoryInfo>
              Когда история отключена, сообщения удаляются через 24 часа.
            </ChatGroupGreeterHistoryInfo>
          </>
        )}
      </div>
    </StyledChatGroupGreeter>
  );
});

ChatGroupGreeter.displayName = 'ChatGroupGreeter';

export default ChatGroupGreeter;
