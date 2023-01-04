import { FC, ReactNode, useId } from "react";
import { StyledOptionRadio, StyledOptionRadioLabel } from "./styled";

interface OptionRadioProps {
  children: ReactNode;
  name: string;
  value: string;
  checked?: boolean;
  onClick?: (event?: any) => void;
}

export const OptionRadio: FC<OptionRadioProps> = (props: OptionRadioProps) => {
  const { children, name, value, checked, onClick } = props;

  const id = useId();

  return (
    <>
      <StyledOptionRadio
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
      />
      <StyledOptionRadioLabel htmlFor={id}>{children}</StyledOptionRadioLabel>
    </>
  );
};
