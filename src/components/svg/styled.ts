import styled from 'styled-components';

export const StyledSvg = styled.svg<StyledSvgProps>`
  fill: ${(props) => props.fill || props.theme.svg.fillColor};
`;

interface StyledSvgProps {
  fill?: string;
}
