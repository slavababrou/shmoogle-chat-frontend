import { FC, memo } from 'react';

import { SvgProps } from 'core/types/svg-props';
import { StyledSvg } from '../styled';

const LeftArrowSvg: FC<SvgProps> = memo((props: SvgProps) => {
  const { fill } = props;
  return (
    <StyledSvg width="24px" height="24px" viewBox="0 0 24 24" fill={fill}>
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
      <path fill="none" d="M0 0h24v24H0z"></path>
    </StyledSvg>
  );
});

LeftArrowSvg.displayName = 'LeftArrowSvg';

export default LeftArrowSvg;
