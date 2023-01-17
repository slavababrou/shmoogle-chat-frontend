import styled from "styled-components";

export const StyledButtonWithIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px;
  border: 1px solid #dadce0;
  color: blue;
  transition: background 0.1s ease;
  &:hover {
    cursor: pointer;
    background: rgba(26, 115, 232, 0.11);
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonWithIconName = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
