import styled from 'styled-components';

export const ResultContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  border: 1px solid transparent;
  &:hover {
    cursor: pointer;
    border-left: 1px solid ${({ theme }) => theme.button.textColor};
    background: ${({ theme }) => theme.activeChatListItemBackgroundColor};
  }
  &:hover * {
    cursor: pointer;
  }
`;

export const StyledSearchInputResultsList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
