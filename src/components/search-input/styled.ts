import styled from 'styled-components';

export const StyledSearchInput = styled.input`
  padding: 0px;
  border: none;
  outline: none;
  height: auto;
  width: 100%;
  background: transparent;
  font-size: 1rem;
  &::placeholder {
    color: ${({ theme }) => theme.textarea.placeholderColor};
  }
  &:focus::placeholder {
    color: ${({ theme }) => theme.text.secondaryColor};
  }
`;

export const SearchInputResultsContainer = styled.div`
  display: none;
  width: 100%;
  border: 1px solid transparent;
  background: #fff;
  box-shadow: 0 1px 1px 0 rgba(${({ theme }) => theme.textarea.shadowColor}, 0.3),
    0 1px 3px 1px rgba(${({ theme }) => theme.textarea.shadowColor}, 0.15);
  border-radius: 0 0 8px 8px;
  padding-bottom: 5px;
  z-index: 2;
  &:hover {
    display: flex;
  }
`;

export const SearchInputContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background: ${({ theme }) => theme.textarea.background};
  transition: background 100ms ease-in, width 100ms ease-out;
  border: 1px solid transparent;
  &:focus-within {
    background: #fff;
    border-radius: 8px 8px 0 0;

    box-shadow: 0 1px 1px 0 rgba(${({ theme }) => theme.textarea.shadowColor}, 0.3),
      0 1px 3px 1px rgba(${({ theme }) => theme.textarea.shadowColor}, 0.15);
  }
  &:focus-within svg {
    fill: ${({ theme }) => theme.text.secondaryColor};
  }

  &:focus-within ${SearchInputResultsContainer} {
    display: flex;
  }
`;

export const SearchInputArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 8px;
  flex-shrink: 0;
`;

export const BlankDiv = styled.div<BlankDivProps>`
  padding: ${(props) => `0px ${props.padding}`};
  height: 100%;
`;

interface BlankDivProps {
  padding?: string;
}
