import styled from 'styled-components';

type EllipsPropsType = {
  minWidthEllips?: string;
  heightEllips?: string;
  bgColor?: string;
  boxShadow?: string;
  widthSub?: string;
  heightSub?: string;
  bgColorSub?: string;
  inset?: string;
};

type StyledElipsPropsType = {
  $bgColor?: string;
  $boxShadow?: string;
  $minWidth?: string;
  $height?: string;
  $inset?: string;
};

type StyledElipsSubtractPropsType = {
  $bgColorSub?: string;
  $widthSub?: string;
  $heightSub?: string;
};

export const Ellips = (props: EllipsPropsType) => {
  return (
    <StyledElips
      $bgColor={props.bgColor}
      $minWidth={props.minWidthEllips}
      $height={props.heightEllips}
      $inset={props.inset}
      $boxShadow={props.boxShadow}
    >
      <StyledElipsSubtract
        $widthSub={props.widthSub}
        $heightSub={props.heightSub}
        $bgColorSub={props.bgColorSub}
      />
    </StyledElips>
  );
};

const StyledElips = styled.div<StyledElipsPropsType>`
  position: absolute;
  z-index: 1;
  min-width: ${(props) => props.$minWidth || '365px'};
  height: ${(props) => props.$height || '365px'};
  background: ${(props) => props.$bgColor || '#e2a200'};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${(props) => props.$boxShadow || '0 4px 70px 0  rgba(226, 162, 0, 0.25)'} ;
  inset: ${(props) => props.$inset || '0'};
`;

const StyledElipsSubtract = styled.div<StyledElipsSubtractPropsType>`
  width: ${(props) => props.$widthSub || '288px'};;
  height: ${(props) => props.$heightSub || '288px'};
  background: ${(props) => props.$bgColorSub || '#353535'};
  border-radius: 100%;
`;
