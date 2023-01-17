import styled from "styled-components";

export const StyledSidebar = styled.div<StyledSidebarProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: ${(props) => props.position || "fixed"};
  box-shadow: inset -1px 0 0 rgb(100 121 143 / 12%);
  width: ${(props) => props.width || "72px"};
  height: -webkit-fill-available;
  z-index: 5;
  background: #fff;
  transition: width 0.1s ease;
  overflow: hidden;
`;

export const ChatListContainer = styled.div<ChatListContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: ${(props) => props.flex};
`;

export const ChatListItemContainer = styled.div`
  border-radius: 0 30px 30px 0;
  margin: 0 42px 0 4px;
  padding: 2px 4px 0 42px;
  background: #e6f4ea;
  &:hover {
    cursor: pointer;
  }
`;

interface ChatListContainerProps {
  flex?: string;
}

interface StyledSidebarProps {
  width?: string;
  position?: string;
}
