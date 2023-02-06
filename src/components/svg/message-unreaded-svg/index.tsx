import { FC, memo } from 'react';

import { SvgProps } from 'core/types/svg-props';
import { StyledSvg } from '../styled';

const MessageUnreaded: FC<SvgProps> = memo((props: SvgProps) => {
  const { fill, style, size } = props;
  return (
    <StyledSvg height={size || '24'} viewBox="0 0 24 24" width={size || '24'} fill={fill} style={style}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 10.584V16C20 17.1 19.1 18 18 18H5L2 22V6C2 4.9 2.9 4 4 4H13.416C13.1484 4.61246 13 5.2889 13 6H4V16H18V11C18.7111 11 19.3875 10.8516 20 10.584Z"
      ></path>
      <circle cx="18" cy="6" r="3"></circle>
    </StyledSvg>
  );
});

MessageUnreaded.displayName = 'MessageUnreaded';

export default MessageUnreaded;
