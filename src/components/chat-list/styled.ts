import styled from "styled-components";

export const ListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ListBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
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
