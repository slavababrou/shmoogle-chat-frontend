import { SvgProps } from 'core/types/svg-props';
import { FC, memo } from 'react';

const AddUserSvg: FC<SvgProps> = memo((props: SvgProps) => {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="blue">
      <path d="M9,12c2.2,0,4-1.8,4-4s-1.8-4-4-4S5,5.8,5,8S6.8,12,9,12z M9,6c1.1,0,2,0.9,2,2s-0.9,2-2,2S7,9.1,7,8  S7.9,6,9,6z M9,13c-2.7,0-8,1.3-8,4v3h16v-3C17,14.3,11.7,13,9,13z M15,18H3v-1c0.2-0.7,3.3-2,6-2s5.8,1.3,6,2V18z M18,14v-3h-3V9h3  V6h2v3h3v2h-3v3H18z"></path>
    </svg>
  );
});

AddUserSvg.displayName = 'AddUserSvg';

export default AddUserSvg;
