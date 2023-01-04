import styled from "styled-components";

export const StyledSearchInput = styled.input`
  padding: 0px;
  border: none;
  outline: none;
  height: auto;
  width: 100%;
  background: transparent;
  font-size: 1rem;
`;

export const SearchInputContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 8px;
  background: #f1f3f4;
  transition: background 100ms ease-in, width 100ms ease-out;
  border: 1px solid: transparent;
  &:focus-within {
    background: #fff;
    box-shadow: 0 1px 1px 0 rgba(65,69,73,.3),0 1px 3px 1px rgba(65,69,73,.15);
  }
`;

export const BlankDiv = styled.div<any>`
  padding: ${(props) => `0px ${props.padding}`};
  height: 100%;
`;
