import styled from 'styled-components';

export const StyledCreateChatForm = styled.div`
  background: ${({ theme }) => theme.block.background};
  border-radius: 10px;
  padding: 20px;
  overflow: visible;
`;

export const CreateChatFormTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: 400;
`;

export const CreateChatFormInfo = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
`;

export const CreateChatFormInputContainer = styled.div`
  height: 40px;
  width: 500px;
`;

export const CreateChatFormInputs = styled.div`
  & ${CreateChatFormInputContainer} + ${CreateChatFormInputContainer} {
    margin-top: 10px;
  }
`;
export const UserResults = styled.div`
  background: ${({ theme }) => theme.block.background};
  border-radius: 0 0 10px 10px;
  display: none;
  padding: 10px 20px;
  position: absolute;
  bottom: 0;
  transform: translateY(100%);
  left: 0;
  right: 0;
  overflow-y: auto;
  max-height: 200px;
  &:hover {
    display: block;
  }
`;

export const UserResultContainer = styled.div`
  border-radius: 0 30px 30px 0;
  padding: 10px 0;
  margin-left: -20px;
  padding-left: 20px;
  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.activeChatListItemBackgroundColor};
  }
`;

export const CreateChatFormUsers = styled.div`
  display: flex;
  margin-top: 20px;
  height: 40px;
  position: relative;

  &: focus-within ${UserResults} {
    display: block;
  }
`;

export const CreateChatFormButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 30px;
  padding-top: 20px;
  gap: 15px;
  box-shadow: inset 0 2px 0 ${({ theme }) => theme.block.shadowColor};
`;
