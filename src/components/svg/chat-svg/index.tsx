import { SvgProps } from 'core/types/svg-props';
import { FC, memo } from 'react';

const ChatSvg: FC<SvgProps> = memo((props: SvgProps) => {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0V0z" fill="none"></path>
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H4V4h16v12z"></path>
    </svg>
  );
});

ChatSvg.displayName = 'ChatSvg';

export default ChatSvg;
