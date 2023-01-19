import { FC, useRef, useLayoutEffect, useState, memo } from 'react';

import { ChatRoomFormTextarea, StyledChatRoomForm } from './styled';
import RoundButton from '../../ui/round-button';
import RoundedPlusSvg from 'components/svg/rounded-plus-svg';
import SendArrowSvg from 'components/svg/send-arrow-svg';

interface ChatRoomFormProps {
  placeholder?: string;
}

const ChatRoomForm: FC<ChatRoomFormProps> = memo((props: ChatRoomFormProps) => {
  const { placeholder } = props;
  const [value, setValue] = useState('');
  const textareaRef: any = useRef<HTMLTextAreaElement>(null);

  const onChange = (event: any) => setValue(event.target.value);

  useLayoutEffect(() => {
    textareaRef.current.style.height = 'inherit';
    textareaRef.current.style.height = `${Math.max(textareaRef.current.scrollHeight, 16)}px`;
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
        onChange={onChange}
      ></ChatRoomFormTextarea>
      <RoundButton size="24px" padding="8px">
        <SendArrowSvg />
      </RoundButton>
    </StyledChatRoomForm>
  );
});

ChatRoomForm.displayName = 'ChatRoomForm';

export default ChatRoomForm;
