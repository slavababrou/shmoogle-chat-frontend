import { FC, ReactNode } from 'react';

import { StyledRoundButton, StyledRoundButtonProps } from './styled';

interface RoundButtonProps extends StyledRoundButtonProps {
  children: ReactNode;
  onClick?: (event?: any) => void;
}

// TODO: Add hints for buttons, add inherited from html-a props
const RoundButton: FC<RoundButtonProps> = (props: RoundButtonProps) => {
  const { children, onClick, ...other } = props;

  const onClickHandler = (event: any) => {
    if (onClick) {
      onClick(event.target.value);
    }
  };

  return (
    <StyledRoundButton {...other} onClick={onClickHandler}>
      {children}
    </StyledRoundButton>
  );
};

RoundButton.displayName = 'RoundButton';

export default RoundButton;
