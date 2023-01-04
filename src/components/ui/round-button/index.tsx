import { FC, ReactNode } from "react";
import { StyledRoundButton, StyledRoundButtonProps } from "./styled";

interface RoundButtonProps extends StyledRoundButtonProps {
  children: ReactNode;
  onClick?: (event?: any) => void;
}
// TODO: Add hints for buttons
export const RoundButton: FC<RoundButtonProps> = (props: RoundButtonProps) => {
  const { children, ...other } = props;

  return <StyledRoundButton {...other}>{children}</StyledRoundButton>;
};
