import styled from 'styled-components';

type EllipsPropsType = {
  $width?: string;
  $height?: string;
  $boxshadowcolor?: string;
  $inset?: string;
};


export const Ellipse = styled.div<EllipsPropsType>`
  position: absolute;
  width: ${props => props.$width ||'356px'};
  height: ${props => props.$height ||'356px'};;
  border-radius: 100%;
  box-shadow: ${props => props.$boxshadowcolor ||'0 4px 70px 0 rgba(226, 162, 0, 0.25)'};
  inset: ${props => props.$inset || 'auto auto auto auto'};
  svg {
    min-width: 100%;
    min-height: 100%;
  }
`;
