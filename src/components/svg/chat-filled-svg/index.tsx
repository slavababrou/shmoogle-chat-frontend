import { SvgProps } from 'core/types/svg-props';
import { FC, memo } from 'react';

const ChatFilledSvg: FC<SvgProps> = memo((props: SvgProps) => {
  const { size, fill, style } = props;

  return (
    <svg width={size || '20'} height={size || '20'} viewBox="0 0 24 24" fill={fill ?? 'gray'} style={style}>
      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H4V4h16v12zM6 12h8v2H6zm0-3h12v2H6zm0-3h12v2H6z"></path>
      <path fill="none" d="M0 0h24v24H0V0z"></path>
    </svg>
  );
});

ChatFilledSvg.displayName = 'ChatFilledSvg';

export default ChatFilledSvg;
