import styled from 'styled-components';

export const MessageResponsesContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;
`;

export const MessageResponsesCount = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;
  font-weight: 600;
  color: ${({ theme }) => theme.text.secondaryColor};
`;

export const MessageResponsesLastDate = styled.label`
  color: ${({ theme }) => theme.text.secondaryColor};
  font-size: 0.8rem;
`;
