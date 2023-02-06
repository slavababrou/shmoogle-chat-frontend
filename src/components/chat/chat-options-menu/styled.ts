import styled from 'styled-components';

export const ActionContainer = styled.div`
  height: 10px;
  padding: 10px 5px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  user-select: none;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.menu.color};

  & svg {
    fill: ${({ theme }) => theme.menu.color};
  }

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.activeChatListItemBackgroundColor};
  }
`;
