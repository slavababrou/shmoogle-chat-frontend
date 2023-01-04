import styled from "styled-components";

export const StyledRoundButton = styled.a<StyledRoundButtonProps>`
  border-radius: 50%;
  width: ${(props) => props.size || "20px"};
  height: ${(props) => props.size || "20px"};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  transition: background 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #5f6368;
  &:hover {
    cursor: pointer;
    background: rgba(60, 64, 67, 0.078);
  }
`;

export interface StyledRoundButtonProps {
  size?: string;
  padding?: string;
  margin?: string;
}
