import styled from 'styled-components';

export const StyledChatInfoButton = styled.div`
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
