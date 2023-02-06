import { FC, ReactNode } from 'react';

import { StyledOptionsContainer } from './styled';

interface OptionsContainerProps {
  children: ReactNode;
}

const OptionsContainer: FC<OptionsContainerProps> = (props: OptionsContainerProps) => {
  const { children } = props;

  return <StyledOptionsContainer>{children}</StyledOptionsContainer>;
};

OptionsContainer.displayName = 'OptionsContainer';

export default OptionsContainer;
