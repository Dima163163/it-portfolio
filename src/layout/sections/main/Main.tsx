import { Button } from '../../../components/button/Button';
import photo from '../../../assets/images/photo.png';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';
import { Ellips } from '../../../components/ellips/Ellips';

type StyleMainSkillPropsType = {
  $inset?: string
}

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper $align='center' $justify='space-between'>
        <div>
          <StyledGreeting>Hello</StyledGreeting>
          <Name>I’m Dmitry Khlopov</Name>
          <MainTitle>
            I've been doing front-end development for a
            year now. Do you need a site layout, or maybe a
            turnkey website? Then contact me
          </MainTitle>
          <Button>Contact me</Button>
        </div>
        <ImageWrapper>
          <Ellips
          $width='575px'
          $height='575px'
          $boxshadowcolor='0 4px 70px 0 rgba(0, 196, 240, 0.42)'
          $inset='auto 0 0 auto'
        >
          <svg viewBox="150 150 575 575" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="439.5" cy="439.972" r="254" stroke="#00C4F0" strokeWidth="67" shapeRendering="crispEdges" />
          </svg>
        </Ellips>
          <StyleMainSkill $inset={'0 auto auto 0'}>Ps</StyleMainSkill>
          <StyleMainSkill $inset={'auto 0 0 auto'}>Ux</StyleMainSkill>
          <StyleMainSkill $inset={'auto auto 0 0'}>&lt;/</StyleMainSkill>
          <StyleMainSkill $inset={'0 0 auto auto'}>UI</StyleMainSkill>
          <Photo src={photo} />
        </ImageWrapper>
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledGreeting = styled.span`
  
`

const StyledMain = styled.div`
  background-color: #2A2A2A;
`;

const Photo = styled.img`
  width: 530px;
  height: 600px;
  object-fit: cover;
  position: relative;
  z-index: 2;
`;

const MainTitle = styled.h1`
  display: block;
`;

const Name = styled.span`
  display: block;
`;

const ImageWrapper = styled.div`
  position: relative;
  min-width: 575px;
`;

const StyleMainSkill = styled.div<StyleMainSkillPropsType>`
  border-radius: 100%;
  width: 90px;
  height: 90px;
  font-weight: 700;
  font-size: 36px;
  color: #00c4f0;
  background: linear-gradient(135deg, #414141 0%, #2d2d2d 100%);
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 3;
  inset: ${props => props.$inset || 'auto'};
`