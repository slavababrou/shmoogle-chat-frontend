import styled from "styled-components";

export const StyledChatRoom = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-bottom: 32px;
  box-sizing: border-box;
`;

export const ChatRoomViewBox = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  overflow-y: scroll;
  flex: 1;
  padding: 0 5%;
`;

export const ChatRoomContent = styled.div`
  position: absolute;
`;

export const ChatRoomFormContainer = styled.div<ChatRoomFormContainerProps>`
  display: flex;
  padding: 0 5%;
  transition: box-shadow 0.5s ease;
  box-shadow: ${(props) =>
    props.showShadow ? "0px -5px 12px 0px #d0d0d0" : ""};
`;

interface ChatRoomFormContainerProps {
  showShadow?: boolean;
}
