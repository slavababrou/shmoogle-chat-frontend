import { FC, memo } from 'react';

import { SvgProps } from 'core/types/svg-props';
import { StyledSvg } from '../styled';

const ShareFileSvg: FC<SvgProps> = memo((props: SvgProps) => {
  const { fill } = props;
  return (
    <StyledSvg width="20" height="20" viewBox="0 0 24 24" fill={fill}>
      <path d="M14.3 4L20.4 15L18.3 19H5.7L3.6 15L9.7 4H14.3ZM14.3 2H9.7C9 2 8.3 2.4 8 3L1.8 14C1.5 14.6 1.5 15.3 1.8 15.9L3.9 19.9C4.3 20.6 5 21 5.7 21H18.3C19 21 19.7 20.6 20.1 19.9L22.2 15.9C22.5 15.3 22.5 14.6 22.2 14L16.1 3C15.7 2.4 15 2 14.3 2Z"></path>
      <path d="M11.1 7.4L6.6 15.2L7.3 16.5H16.8L17.5 15.2L12.9 7.4H11.1ZM9.3 14.5L12 9.7L14.7 14.5H9.3Z"></path>
    </StyledSvg>
  );
});

ShareFileSvg.displayName = 'ShareFileSvg';

export default ShareFileSvg;
