import { FC, memo } from 'react';

import { SvgProps } from 'core/types/svg-props';
import { StyledSvg } from '../styled';

const CurvedLineSvg: FC<SvgProps> = memo((props: SvgProps) => {
  const { fill } = props;

  return (
    <StyledSvg width="22" height="22" viewBox="0 0 20 20" fill={fill}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 13C14 13.5523 13.5523 14 13 14L9 14C4.02944 14 -1.38949e-06 9.97056 -1.17223e-06 5L-9.97385e-07 0.999999C-9.73244e-07 0.447715 0.447714 -5.92375e-07 0.999999 -5.68234e-07C1.55228 -5.44094e-07 2 0.447715 2 0.999999L2 5C2 8.86599 5.13401 12 9 12L13 12C13.5523 12 14 12.4477 14 13Z"
      ></path>
    </StyledSvg>
  );
});

CurvedLineSvg.displayName = 'CurvedLineSvg';

export default CurvedLineSvg;
