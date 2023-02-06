import { FC, useRef, useLayoutEffect, useState, memo, ChangeEvent } from 'react';

import { ChatRoomFormSendButton, ChatRoomFormTextarea, StyledChatRoomForm } from './styled';
import RoundButton from '../../ui/round-button';
import RoundedPlusSvg from 'components/svg/rounded-plus-svg';
import SendArrowSvg from 'components/svg/send-arrow-svg';

interface ChatRoomFormProps {
  placeholder?: string;
  onChange?: (value: string) => void;
  onSendClick?: () => void;
}

const ChatRoomForm: FC<ChatRoomFormProps> = memo((props: ChatRoomFormProps) => {
  const { placeholder, onChange, onSendClick } = props;
  const [value, setValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const changeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    if (onChange) {
      onChange(value);
    }
    setValue(value);
  };

  const clickHandler = () => {
    if (onSendClick) {
      onSendClick();
    }
    setValue('');
  };

  useLayoutEffect(() => {
    if (textareaRef.current !== null) {
      textareaRef.current.style.height = 'inherit';
      textareaRef.current.style.height = `${Math.max(textareaRef.current.scrollHeight, 16)}px`;
    }
  }, [value]);

  return (
    <StyledChatRoomForm>
      <RoundButton size="24px" padding="8px">
        <RoundedPlusSvg />
      </RoundButton>

      <ChatRoomFormTextarea
        ref={textareaRef}
        placeholder={placeholder}
        value={value}
        onChange={changeHandler}
      ></ChatRoomFormTextarea>
      <RoundButton size="24px" padding="8px" disabled={!value} onClick={clickHandler}>
        <ChatRoomFormSendButton disabled={!value}>
          <SendArrowSvg />
        </ChatRoomFormSendButton>
      </RoundButton>
    </StyledChatRoomForm>
  );
});

ChatRoomForm.displayName = 'ChatRoomForm';

export default ChatRoomForm;
