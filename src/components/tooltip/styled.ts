import styled from "styled-components";

export const StyledTooltip = styled.div`
  position: relative;
`;

export const TooltipBox = styled.div<TooltipBoxProps>`
  font-size: 0.8rem;
  z-index: 5;
  position: absolute;
  background: rgba(75, 75, 75, 0.9);
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  top: calc(100% + 5px);
  border: $border-width solid $main-color;
  box-sizing: border-box;
  transition: opacity 0.3s ease, visibility 0s;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
`;

interface TooltipBoxProps {
  isVisible?: boolean;
}
