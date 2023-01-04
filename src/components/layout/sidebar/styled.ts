import styled from "styled-components";

export const StyledSidebar = styled.div<StyledSidebarProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  float: left;
  left: 0;
  border-right: 1px solid grey;
  width: ${(props) => props.width || "72px"};
  height: -webkit-fill-available;
  z-index: 5;
  background: #fff;
  transition: width 0.1s ease;
`;

export const ChatListContainer = styled.div<ChatListContainerProps>`
  width: 100%;
  display: flex;
  flex: ${(props) => props.flex};
`;

interface ChatListContainerProps {
  flex?: string;
}

interface StyledSidebarProps {
  width?: string;
}
