import styled from 'styled-components';

type EllipsPropsType = {
  $width?: string;
  $height?: string;
  $boxshadow?: string;
  $inset?: string;
};

export const Ellipse = styled.div<EllipsPropsType>`
  position: absolute;
  max-width: ${(props) => props.$width || '356px'};
  width: 100%;
  height: ${(props) => props.$height || '356px'};;
  border-radius: 100%;
  inset: ${(props) => props.$inset || 'auto auto auto auto'};
  box-shadow: ${(props) =>
    props.$boxshadow || '0 4px 70px rgba(226, 162, 0, 0.25)'};

  svg {
    min-width: 100%;
    min-height: 100%;
  }
`;
