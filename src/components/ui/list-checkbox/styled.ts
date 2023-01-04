import styled from "styled-components";

export const StyledListCheckbox = styled.input.attrs({
  type: "checkbox",
})`
  display: none;
`;

export const StyledListCheckboxLabel = styled.label`
  padding: 0 5px;
  width: 10px;
  height: 20px;

  &:hover {
    cursor: pointer;
  }

  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-top: 4px solid transparent;
    border-left: 8px solid black;
    border-bottom: 4px solid transparent;
    margin-top: 6px;
    margin-left: 1px;
    transition: transform 0.1s ease-out;
  }

  ${StyledListCheckbox}:checked + &::before {
    transform: rotate(90deg);
  }
`;
