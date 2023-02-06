import styled from 'styled-components';

export const StyledChip = styled.div`
  border-radius: 15px;
  box-shadow: 0px 0px 1px 0px ${({ theme }) => theme.text.secondaryColor};
  background: ${({ theme }) => theme.block.background};
  padding: 2px;
  display: inline-flex;
  align-items: center;
  gap: 3px;
`;

export const ChipLabel = styled.label`
  font-size: 0.8rem;
  margin-bottom: 2px;
  color: ${({ theme }) => theme.text.secondaryColor};
`;
