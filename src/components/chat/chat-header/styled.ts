import styled from 'styled-components';

export const StyledChatHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5px;
`;

export const ChatHeaderFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ChatHeaderActions = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ChatHeaderChatInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 16px 5px 5px;
  border-radius: 8px;
  transition: background 0.1s ease;
  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.hoverColor};
  }
`;
