import styled from 'styled-components';

export const StyledHeader = styled.div`
  height: 48px;
  padding: 8px;
  top: 0;
  box-shadow: inset 0 -1px 0 ${({ theme }) => theme.block.shadowColor};
  background: ${({ theme }) => theme.block.background};
  position: relative;
`;

export const LogoContainer = styled.div<ContainerProps>`
  padding: ${(props) => props.padding};
`;

export const SearchInputContainer = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  padding: ${(props) => props.padding};
`;

interface ContainerProps {
  padding?: string;
}
