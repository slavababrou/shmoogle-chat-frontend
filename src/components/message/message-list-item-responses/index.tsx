import { FC, memo } from "react";
import { Message } from "core/entities/message.entity";
import { transformDate } from "shared/utils/transform-date";
import {
  MessageResponsesContainer,
  MessageResponsesCount,
  MessageResponsesLastDate,
} from "./styled";

interface MessageListItemResponsesProps {
  message: Message;
}

export const MessageListItemResponses: FC<MessageListItemResponsesProps> = memo(
  (props: MessageListItemResponsesProps) => {
    const { message } = props;

    const [relative, time, , monthDay, month] = transformDate(
      message.creationDate
    );

    if (!message.responses.length) {
      return <></>;
    }

    return (
      <MessageResponsesContainer>
        <svg
          width="22"
          height="22"
          viewBox="0 0 20 20"
          fill="grey"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 13C14 13.5523 13.5523 14 13 14L9 14C4.02944 14 -1.38949e-06 9.97056 -1.17223e-06 5L-9.97385e-07 0.999999C-9.73244e-07 0.447715 0.447714 -5.92375e-07 0.999999 -5.68234e-07C1.55228 -5.44094e-07 2 0.447715 2 0.999999L2 5C2 8.86599 5.13401 12 9 12L13 12C13.5523 12 14 12.4477 14 13Z"
          ></path>
        </svg>

        <MessageResponsesCount>
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="gray"
              style={{ marginBottom: "-6px" }}
            >
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H4V4h16v12zM6 12h8v2H6zm0-3h12v2H6zm0-3h12v2H6z"></path>
              <path fill="none" d="M0 0h24v24H0V0z"></path>
            </svg>
          </div>
          <label>{message.responses.length} ответа</label>
        </MessageResponsesCount>
        <MessageResponsesLastDate>
          {relative ? relative : monthDay + ` ${month.slice(0, 3)}, ` + time}
        </MessageResponsesLastDate>
      </MessageResponsesContainer>
    );
  }
);
