import styled from 'styled-components';

export const StyledChatActionsMenu = styled.div`
  width: max-content;
  min-width: 240px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

export const ChatActionsMenuInput = styled.input.attrs({ type: 'text' })`
  outline: none;
  border: none;
  padding: 15px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text.primaryColor};
  box-shadow: inset 0 -1px 0 ${({ theme }) => theme.block.shadowColor};
  background: ${({ theme }) => theme.block.background};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.textarea.placeholderColor};
  }
`;

export const ActionContainer = styled.div`
  height: 35px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  gap: 15px;
  user-select: none;
  color: ${({ theme }) => theme.menu.color};

  & svg {
    fill: ${({ theme }) => theme.menu.color};
  }

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.activeChatListItemBackgroundColor};
  }
`;
