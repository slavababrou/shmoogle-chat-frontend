import styled from 'styled-components';

export const StyledTooltip = styled.div`
  position: relative;
`;

export const TooltipBox = styled.div<TooltipBoxProps>`
  font-size: 0.8rem;
  z-index: 10;
  position: absolute;
  background: ${({ theme }) => theme.tooltip.background};
  color: ${({ theme }) => theme.tooltip.textColor};
  padding: 5px;
  border-radius: 5px;
  top: calc(100% + 5px);
  box-sizing: border-box;
  transition: opacity 0.3s ease, visibility 0s;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
`;

interface TooltipBoxProps {
  isVisible?: boolean;
}
