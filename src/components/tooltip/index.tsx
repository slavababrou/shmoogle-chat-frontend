import { FC, ReactNode, useState } from "react";
import { StyledTooltip, TooltipBox } from "./styled";

interface TooltipProps {
  children: ReactNode;
  text: string;
  delay?: number;
}

export const Tooltip: FC<TooltipProps> = (props: TooltipProps) => {
  const [show, setShow] = useState(false);
  const { text, children, delay = 500 } = props;
  let timeout: number;

  const setShowTrue = () => {
    window.clearTimeout(timeout);
    timeout = window.setTimeout(() => setShow(true), delay);
  };

  const setShowFalse = () => {
    window.clearTimeout(timeout);
    setShow(false);
  };

  return (
    <StyledTooltip>
      <TooltipBox isVisible={show}>{text}</TooltipBox>
      <div
        onMouseEnter={() => setShowTrue()}
        onMouseLeave={() => setShowFalse()}
      >
        {children}
      </div>
    </StyledTooltip>
  );
};
