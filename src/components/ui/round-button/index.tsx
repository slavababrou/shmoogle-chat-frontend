import { FC, ReactNode, AnchorHTMLAttributes } from 'react';

import { StyledRoundButton, StyledRoundButtonProps } from './styled';

interface RoundButtonProps extends StyledRoundButtonProps, AnchorHTMLAttributes<any> {
  children: ReactNode;
  onClick?: (event?: any) => void;
  disabled?: boolean;
}

const RoundButton: FC<RoundButtonProps> = (props: RoundButtonProps) => {
  const { children, onClick, disabled, ...other } = props;

  const onClickHandler = (event: any) => {
    if (onClick && !disabled) {
      onClick(event);
    }
  };

  return (
    <StyledRoundButton {...other} disabled={disabled} onClick={onClickHandler}>
      {children}
    </StyledRoundButton>
  );
};

RoundButton.displayName = 'RoundButton';

export default RoundButton;
