import { FC, memo } from "react";

import { ButtonWithIcon } from "components/ui/with-icon-button";
import { Chat } from "core/entities/chat.entity";
import {
  ChatGroupAction,
  ChatGroupActionContainer,
  ChatGroupGreeterDate,
  ChatGroupGreeterHistoryInfo,
  ChatGroupGreeterHistoryWho,
  StyledChatGroupGreeter,
} from "./styled";
import chatImage from "assets/new_chat_room.png";
import { useAppSelector } from "shared/hooks/app-selector.hook";
import { Navigate } from "react-router-dom";
import { routes } from "core/constants/routes";
import { transformDate } from "shared/utils/transform-date";
import { ChatHistorySvg } from "../chat-history-svg";

interface ChatGroupGreeterProps {
  chat: Chat;
}

export const ChatGroupGreeter: FC<ChatGroupGreeterProps> = memo(
  (props: ChatGroupGreeterProps) => {
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="blue">
                <path d="M9,12c2.2,0,4-1.8,4-4s-1.8-4-4-4S5,5.8,5,8S6.8,12,9,12z M9,6c1.1,0,2,0.9,2,2s-0.9,2-2,2S7,9.1,7,8  S7.9,6,9,6z M9,13c-2.7,0-8,1.3-8,4v3h16v-3C17,14.3,11.7,13,9,13z M15,18H3v-1c0.2-0.7,3.3-2,6-2s5.8,1.3,6,2V18z M18,14v-3h-3V9h3  V6h2v3h3v2h-3v3H18z"></path>
              </svg>
            </ButtonWithIcon>
          </ChatGroupAction>
          <ChatGroupAction>
            <ButtonWithIcon name="Поделиться файлом">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="blue">
                <path d="M14.3 4L20.4 15L18.3 19H5.7L3.6 15L9.7 4H14.3ZM14.3 2H9.7C9 2 8.3 2.4 8 3L1.8 14C1.5 14.6 1.5 15.3 1.8 15.9L3.9 19.9C4.3 20.6 5 21 5.7 21H18.3C19 21 19.7 20.6 20.1 19.9L22.2 15.9C22.5 15.3 22.5 14.6 22.2 14L16.1 3C15.7 2.4 15 2 14.3 2Z"></path>
                <path d="M11.1 7.4L6.6 15.2L7.3 16.5H16.8L17.5 15.2L12.9 7.4H11.1ZM9.3 14.5L12 9.7L14.7 14.5H9.3Z"></path>
              </svg>
            </ButtonWithIcon>
          </ChatGroupAction>
          <ChatGroupAction>
            <ButtonWithIcon name="Назначить задачи">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="blue">
                <path d="M12 2a9.95 9.95 0 014.473 1.055l-.895 1.791A7.949 7.949 0 0012 4c-4.41 0-8 3.59-8 8s3.59 8 8 8c1.09 0 2.129-.22 3.076-.615l.771 1.847A9.962 9.962 0 0112 22C6.48 22 2 17.52 2 12S6.48 2 12 2zm9 10v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm-.4-8.4L22 5 11 16l-4-4 1.4-1.4 2.6 2.6 9.6-9.6z"></path>
              </svg>
            </ButtonWithIcon>
          </ChatGroupAction>
        </ChatGroupActionContainer>
        <div>
          {chat.isHistorySaved ? (
            <>
              <ChatGroupGreeterHistoryWho>
                <ChatHistorySvg size="20px" />
                {"История включена\n"}
              </ChatGroupGreeterHistoryWho>
              <ChatGroupGreeterHistoryInfo>
                Если история чата включена, отправленные сообщения сохраняются.
              </ChatGroupGreeterHistoryInfo>
            </>
          ) : (
            <>
              <ChatGroupGreeterHistoryWho>
                <ChatHistorySvg size="20px" />
                {chat.creatorId === userId
                  ? "Вы выключили историю\n"
                  : `${creator?.username} выключил историю`}
              </ChatGroupGreeterHistoryWho>
              <ChatGroupGreeterHistoryInfo>
                Когда история отключена, сообщения удаляются через 24 часа.
              </ChatGroupGreeterHistoryInfo>
            </>
          )}
        </div>
      </StyledChatGroupGreeter>
    );
  }
);
