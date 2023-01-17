import styled from "styled-components";

export const StyledChatPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ChatPageHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5px;
`;

export const ChatPageBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ChatPageBodyOptions = styled.div`
  padding-left: 32px;
  box-shadow: inset 0px -2px 0 rgb(100 121 143 / 12%);
`;

export const ChatPageBodyContent = styled.div`
  flex: 1;
`;

export const ChatPageFlexContainer = styled.div<ChatPageFlexContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  width: ${(props) => props.width};
`;

export const ChatHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 16px 5px 5px;
  border-radius: 8px;
  transition: background 0.1s ease;
  &:hover {
    cursor: pointer;
    background: rgba(60, 64, 67, 0.078);
  }
`;

interface ChatPageFlexContainerProps {
  width?: string;
  alignItems?: string;
  justifyContent?: string;
}
