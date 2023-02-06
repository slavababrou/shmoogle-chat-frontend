import styled from 'styled-components';

export const MenuContainer = styled.div<MenuContainerProps>`
  position: absolute;
  background: ${({ theme }) => theme.block.background};
  box-shadow: 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%), 0px 5px 5px -3px rgb(0 0 0 / 20%);
  display: ${(props) => (props.isHidden ? 'none' : 'block')};
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};
  z-index: 5;
`;

interface MenuContainerProps {
  isHidden?: boolean;
  marginTop?: string;
  marginLeft?: string;
}

export const StyledFloatingMenu = styled.div`
  display: inherit;

  position: inherit;
`;
