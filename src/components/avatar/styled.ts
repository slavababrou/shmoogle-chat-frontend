import styled from "styled-components";

export const AvatarWrapper = styled.div<AvatarWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  overflow: hidden;
  width: ${(props) => `${props.size}` || "100%"};
  height: ${(props) => `${props.size}` || "100%"};
  border-radius: 50%;
  background: ${(props) => props.background};
  & img {
    width: ${(props) => `${props.size}` || "100%"};
    height: ${(props) => `${props.size}` || "100%"};
  }
`;

export const AvatarLabel = styled.label`
  user-select: none;
  margin-top: -3px;
  &:hover {
    cursor: inherit;
  }
`;

interface AvatarWrapperProps {
  size?: string;
  background?: string;
}
