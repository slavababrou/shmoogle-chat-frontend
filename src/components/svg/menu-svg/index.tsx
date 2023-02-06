import { FC, memo } from 'react';

import { SvgProps } from 'core/types/svg-props';
import { StyledSvg } from '../styled';

const MenuSvg: FC<SvgProps> = memo((props: SvgProps) => {
  const { fill } = props;
  return (
    <StyledSvg focusable="false" viewBox="0 0 24 24" fill={fill}>
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
    </StyledSvg>
  );
});

MenuSvg.displayName = 'MenuSvg';

export default MenuSvg;
