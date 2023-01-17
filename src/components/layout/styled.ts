import styled from "styled-components";

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => props.align};
  gap: ${(props) => props.gap};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  flex: ${(props) => props.flex};
  position: relative;
`;

export const BodyContainer = styled.div<BodyContainerProps>`
  margin: ${(props) => props.margin};
  flex: 1;
`;

interface FlexContainerProps {
  width?: string;
  height?: string;
  align?: string;
  flex?: string;
  gap?: string;
}

interface BodyContainerProps {
  margin?: string;
}
