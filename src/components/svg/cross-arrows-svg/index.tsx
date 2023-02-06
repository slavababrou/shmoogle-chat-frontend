import { FC, memo } from 'react';

import { SvgProps } from 'core/types/svg-props';
import { StyledSvg } from '../styled';

const CrossArrowsSvg: FC<SvgProps> = memo((props: SvgProps) => {
  const { fill } = props;
  return (
    <StyledSvg height="24" viewBox="0 0 24 24" width="24" fill={fill}>
      <rect fill="none" height="24" width="24"></rect>
      <path d="M15.41,10H20v2h-8V4h2v4.59L20.59,2L22,3.41L15.41,10z M4,12v2h4.59L2,20.59L3.41,22L10,15.41V20h2v-8H4z"></path>
    </StyledSvg>
  );
});

CrossArrowsSvg.displayName = 'CrossArrowsSvg';

export default CrossArrowsSvg;
