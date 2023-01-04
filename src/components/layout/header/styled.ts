import styled from "styled-components";

export const StyledHeader = styled.div`
  height: 48px;
  padding: 8px;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid grey;
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
