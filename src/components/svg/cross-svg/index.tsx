import { FC, memo } from 'react';

import { SvgProps } from 'core/types/svg-props';
import { StyledSvg } from '../styled';

const CrossSvg: FC<SvgProps> = memo((props: SvgProps) => {
  return (
    <StyledSvg focusable="false" height="24px" viewBox="0 0 24 24" width="24px">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
      <path d="M0 0h24v24H0z" fill="none"></path>
    </StyledSvg>
  );
});

CrossSvg.displayName = 'CrossSvg';

export default CrossSvg;
