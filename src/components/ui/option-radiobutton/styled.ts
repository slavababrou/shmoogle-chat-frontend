import styled from "styled-components";

export const StyledOptionRadio = styled.input.attrs({
  type: "radio",
})`
  display: none;
`;

export const StyledOptionRadioLabel = styled.label`
  padding: 6px 18px;
  border-radius: 8px 8px 0px 0px;
  transition: background 0.1s ease;
  position: relative;
  display: flex;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background: rgba(60, 64, 67, 0.078);
  }

  ${StyledOptionRadio}:checked + & {
    color: blue;
  }

  ${StyledOptionRadio}:checked + &::before {
    content: "";
    position: absolute;
    display: block;
    width: 50%;
    height: 4px;
    background: blue;
    border-radius: 3px 3px 0px 0px;
    margin-top: 23px;
  }
`;
