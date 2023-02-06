import styled from 'styled-components';

export const HiddenInput = styled.input.attrs({
  type: 'radio',
})`
  display: none;
`;

export const StyledRadioButton = styled.label`
  border: 2px solid ${({ theme }) => theme.text.secondaryColor};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  user-select: none;

  ${HiddenInput}:checked + & {
    border: 2px solid ${({ theme }) => theme.button.textColor};
  }

  ${HiddenInput}:checked + &::before {
    content: '';
    border-radius: 50%;
    width: 10px;
    height: 10px;
  }

  &::before {
    content: '';
    background: ${({ theme }) => theme.button.textColor};
    position: absolute;
    border-radius: 50%;
    width: 0px;
    height: 0px;
    transition: width 0.3s ease, height 0.3s ease;
  }
`;

export const RadioButtonLabel = styled.label`
  margin-left: 10px;
`;
