import { SvgProps } from 'core/types/svg-props';
import { FC, memo } from 'react';

const MenuSvg: FC<SvgProps> = memo((props: SvgProps) => {
  return (
    <svg focusable="false" viewBox="0 0 24 24">
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
    </svg>
  );
});

MenuSvg.displayName = 'MenuSvg';

export default MenuSvg;
