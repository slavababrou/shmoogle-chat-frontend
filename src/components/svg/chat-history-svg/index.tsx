import { SvgProps } from 'core/types/svg-props';
import { FC, memo } from 'react';

const ChatHistorySvg: FC<SvgProps> = memo((props: SvgProps) => {
  const { size } = props;

  return (
    <svg width={size || '24px'} height={size || '24px'} viewBox="0 0 24 24" fill="#000000">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 6V12L16.23 14.94L14.97 16.49L10 13V6H12Z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 6.01V4H22V10H16V8H18.91C17.53 5.61 14.96 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12H22C22 17.52 17.52 22 11.99 22C6.47 22 2 17.52 2 12C2 6.48 6.47 2 11.99 2C15.27 2 18.17 3.58 20 6.01Z"
      ></path>
    </svg>
  );
});

ChatHistorySvg.displayName = 'ChatHistorySvg';

export default ChatHistorySvg;
