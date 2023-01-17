import styled from "styled-components";

export const ListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ListBody = styled.div<ListBodyProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isEmpty ? "center" : "")};
  justify-content: ${(props) => (props.isEmpty ? "center" : "")};
  height: 100%;
  padding: 0 4px 0 30px;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
`;

export const NameContainer = styled.div`
  flex-grow: 1;
`;

export const ChatListItemContainer = styled.div`
  border-radius: 0 30px 30px 0;
  margin-left: -30px;
  padding: 2px 0;
  padding-left: 30px;
  background: #e6f4ea;
  &:hover {
    cursor: pointer;
  }
`;

export const CheckboxContainer = styled.div`
  margin: 0 5px;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 2px;

  &:hover {
    cursor: pointer;
    background: #5f6368;
  }
`;

interface ListBodyProps {
  isEmpty?: boolean;
}
