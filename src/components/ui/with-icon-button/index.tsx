import { FC, ReactNode, memo } from 'react';

import { IconWrapper, ButtonWithIconName, StyledButtonWithIcon } from './styled';

interface ButtonWithIconProps {
  name: string;
  children?: ReactNode;
  onClick?: () => void;
}

const ButtonWithIcon: FC<ButtonWithIconProps> = memo((props: ButtonWithIconProps) => {
  const { name, children, onClick } = props;

  return (
    <StyledButtonWithIcon onClick={onClick}>
      <IconWrapper>{children}</IconWrapper>
      <ButtonWithIconName>{name}</ButtonWithIconName>
    </StyledButtonWithIcon>
  );
});

ButtonWithIcon.displayName = 'ButtonWithIcon';

export default ButtonWithIcon;
