import { FC, ReactNode, useId, memo } from 'react';

import { StyledOptionRadio, StyledOptionRadioLabel } from './styled';

interface OptionRadioProps {
  children: ReactNode;
  name: string;
  value: any;
  checked?: boolean;
  onChange?: (event?: any) => void;
}

const OptionRadio: FC<OptionRadioProps> = memo((props: OptionRadioProps) => {
  const { children, name, value, checked, onChange } = props;

  const id = useId();

  return (
    <>
      <StyledOptionRadio type="radio" name={name} id={id} value={value} checked={checked} onChange={onChange} />
      <StyledOptionRadioLabel htmlFor={id}>{children}</StyledOptionRadioLabel>
    </>
  );
});

OptionRadio.displayName = 'OptionRadio';

export default OptionRadio;
