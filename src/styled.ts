import styled from 'styled-components';

export const AppBody = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.text.primaryColor};
  display: flex;
  flex-direction: column;
`;
