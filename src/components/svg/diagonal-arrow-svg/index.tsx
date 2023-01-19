import { SvgProps } from 'core/types/svg-props';
import { FC, memo } from 'react';

const DiagonalArrowSvg: FC<SvgProps> = memo((props: SvgProps) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20">
      <rect width="20" height="20" fill="none"></rect>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 5.41L12.59 14H8V16H14H14.59H16V14.59V14V8H14V12.59L5.41 4L4 5.41Z"
      ></path>
    </svg>
  );
});

DiagonalArrowSvg.displayName = 'DiagonalArrowSvg';

export default DiagonalArrowSvg;
