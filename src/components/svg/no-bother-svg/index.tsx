import { FC, memo } from 'react';

import { SvgProps } from 'core/types/svg-props';
import { StyledSvg } from '../styled';

const NoBotherSvg: FC<SvgProps> = memo((props: SvgProps) => {
  const { fill } = props;
  return (
    <StyledSvg width="12px" height="12px" viewBox="0 0 24 24" version="1.1" fill={fill}>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="DND-(1)" fillRule="nonzero">
          <path
            d="M12,24.0001 C5.38775,24.0001 0,18.6123 0,12.0001 C0,5.38782 5.38775,6.10352e-05 12,6.10352e-05 C18.6122,6.10352e-05 24,5.37615 24,12.0001 C24,18.6123 18.6122,24.0001 12,24.0001 Z"
            id="Path"
            fill="#D93025"
          ></path>
          <path
            d="M17.3235,13.7493 L6.66369,13.7493 C5.74963,13.7493 5.00293,12.9628 5.00293,12.0001 C5.00293,11.0373 5.74963,10.2508 6.66369,10.2508 L17.3363,10.2508 C18.2504,10.2508 18.9971,11.0373 18.9971,12.0001 C18.9971,12.9628 18.2375,13.7493 17.3235,13.7493 Z"
            id="Path"
            fill="#FFFFFF"
          ></path>
        </g>
      </g>
    </StyledSvg>
  );
});

NoBotherSvg.displayName = 'NoBotherSvg';

export default NoBotherSvg;
