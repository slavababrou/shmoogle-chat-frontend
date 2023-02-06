import { FC, memo } from 'react';

import { SvgProps } from 'core/types/svg-props';
import { StyledSvg } from '../styled';

const ManagerSvg: FC<SvgProps> = memo((props: SvgProps) => {
  const { fill, style } = props;
  return (
    <StyledSvg height="24" viewBox="0 0 24 24" width="24" fill={fill} style={style}>
      <path d="M-618-1848H782v3600H-618zM0 0h24v24H0z" fill="none"></path>
      <path d="M12 5l-7 7 7 7 7-7-7-7zm-4.17 7L12 7.83 16.17 12 12 16.17 7.83 12z"></path>
    </StyledSvg>
  );
});

ManagerSvg.displayName = 'ManagerSvg';

export default ManagerSvg;
