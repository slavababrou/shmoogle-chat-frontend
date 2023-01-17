import { FC, useRef, useLayoutEffect, useState, memo } from "react";
import { RoundButton } from "../../ui/round-button";
import { ChatRoomFormTextarea, StyledChatRoomForm } from "./styled";

interface ChatRoomFormProps {
  placeholder?: string;
}

export const ChatRoomForm: FC<ChatRoomFormProps> = memo(
  (props: ChatRoomFormProps) => {
    const { placeholder } = props;
    const [value, setValue] = useState("");
    const textareaRef: any = useRef<HTMLTextAreaElement>(null);

    const onChange = (event: any) => setValue(event.target.value);

    useLayoutEffect(() => {
      textareaRef.current.style.height = "inherit";
      textareaRef.current.style.height = `${Math.max(
        textareaRef.current.scrollHeight,
        16
      )}px`;
    }, [value]);

    return (
      <StyledChatRoomForm>
        <RoundButton size="24px" padding="8px">
          <svg width="24px" height="24px" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
            <path d="M13 11V8h-2v3H8v2h3v3h2v-3h3v-2h-3z"></path>
          </svg>
        </RoundButton>

        <ChatRoomFormTextarea
          ref={textareaRef}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        ></ChatRoomFormTextarea>
        <RoundButton size="24px" padding="8px">
          <svg viewBox="0 0 24 24" width="24px" height="24px">
            <path d="M6.7,17.9v-3.7l4-1.8c0.4-0.2,0.4-0.7,0-0.9l-4-1.8V6.1L19.8,12L6.7,17.9z M23.7,11.5L5.4,3.3  c-0.1,0-0.1,0-0.2,0C5,3.3,4.7,3.5,4.7,3.8v5.9v4.8v5.9c0,0.3,0.2,0.5,0.5,0.5c0.1,0,0.1,0,0.2,0l18.3-8.2  C24.1,12.3,24.1,11.7,23.7,11.5z"></path>
          </svg>
        </RoundButton>
      </StyledChatRoomForm>
    );
  }
);
