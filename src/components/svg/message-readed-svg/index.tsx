import { FC, memo } from 'react';

import { SvgProps } from 'core/types/svg-props';
import { StyledSvg } from '../styled';

const MessageReaded: FC<SvgProps> = memo((props: SvgProps) => {
  const { fill, style, size } = props;
  return (
    <StyledSvg height={size || '24'} viewBox="0 0 24 24" width={size || '24'} fill={fill} style={style}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 4H5C3.9 4 3 4.9 3 6V22L6 18H12.3414C12.1203 17.3744 12 16.7013 12 16H5V6H19V10.083C19.7179 10.2034 20.3926 10.4513 21 10.8027V6C21 4.9 20.1 4 19 4Z"
      ></path>
      <path d="M17.3691 17.2982L15.3326 15.2617L14 16.585L17.3691 19.9541L23 14.3233L21.6767 13L17.3691 17.2982Z"></path>
    </StyledSvg>
  );
});

MessageReaded.displayName = 'MessageReaded';

export default MessageReaded;
