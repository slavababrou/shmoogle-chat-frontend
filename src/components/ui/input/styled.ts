import styled from 'styled-components';

export const InputContainer = styled.form`
  display: flex;
  align-items: center;
  padding: 0 5px;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  box-shadow: inset 0 -1px 0 ${({ theme }) => theme.block.shadowColor};
  background: ${({ theme }) => theme.textarea.background};

  &:focus-within {
    box-shadow: inset 0 -1px 0 ${({ theme }) => theme.button.textColor};
  }
`;

export const StyledInput = styled.input.attrs({
  type: 'text',
})`
  flex: 1;
  flex-basis: 30%;
  outline: none;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.text.primaryColor};
  &::placeholder {
    color: ${({ theme }) => theme.textarea.placeholderColor};
  }
  &:focus {
    outline: none;
    border: none;
  }
`;

export const InputLengthIndicator = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textarea.placeholderColor};
  user-select: none;
`;
