import { FC, memo } from 'react';

const RoundedPlusSvg: FC = memo(() => {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
      <path d="M13 11V8h-2v3H8v2h3v3h2v-3h3v-2h-3z"></path>
    </svg>
  );
});

RoundedPlusSvg.displayName = 'RoundedPlusSvg';

export default RoundedPlusSvg;
