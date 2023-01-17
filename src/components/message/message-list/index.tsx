import { FC, memo } from "react";
import { MessageListItem } from "../message-list-item";
import { MessageListItemResponses } from "../message-list-item-responses";
import { Message } from "core/entities/message.entity";
import { getNativeDate, getNativeTime } from "shared/utils/transform-date";
import { MessageContainer, MessageDate } from "./styled";

interface MessageListProps {
  messages: Message[];
}

export const MessageList: FC<MessageListProps> = memo(
  (props: MessageListProps) => {
    const { messages } = props;

    return (
      <MessageContainer>
        {messages
          .filter((message) => !message.responseToId)
          .map((message, index) => {
            let isStacked = false;
            let showDate = true;
            const time = getNativeTime(message.creationDate);
            const date = getNativeDate(message.creationDate);

            if (index) {
              const previousMessage = messages[index - 1];
              const previousTime = getNativeTime(previousMessage.creationDate);
              const previousDate = getNativeDate(previousMessage.creationDate);

              if (
                previousTime === time &&
                previousMessage.user === message.user &&
                !message.responses.length
              ) {
                isStacked = true;
              }

              if (date == previousDate) {
                showDate = false;
              }
            }

            return (
              <div key={message.id}>
                {showDate ? <MessageDate>{date}</MessageDate> : <></>}

                <MessageListItem
                  message={message}
                  onlyText={isStacked}
                  isManager={true}
                />
                <MessageListItemResponses message={message} />
              </div>
            );
          })}
      </MessageContainer>
    );
  }
);
