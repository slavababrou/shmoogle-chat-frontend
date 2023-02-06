import styled from 'styled-components';

export const StyledDmPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const DmPageHeader = styled.div`
  box-shadow: inset 0px -2px 0 ${({ theme }) => theme.block.shadowColor};
`;

export const DmPageBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const DmPageBodyContent = styled.div`
  flex: 1;
`;
