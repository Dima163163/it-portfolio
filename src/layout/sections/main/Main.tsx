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
          <span>Hello</span>
          <Name>I’m Gleb Kostrubov</Name>
          <MainTitle>
            I've been doing web design, front-end and back-end development for a
            year now. Do you need a website design, site layout, or maybe a
            turnkey website? Then contact me
          </MainTitle>
          <Button text={'Contact me'} />
        </div>
        <ImageWrapper>
          <Ellips
            minWidthEllips='575px'
            heightEllips='575px'
            bgColor='#00c4f0'
            boxShadow='0 0 152px 0 rgba(0, 193, 236, 0.25)'
            widthSub='441px'
            heightSub='441px'
            bgColorSub='#2A2A2A'
            inset='auto 0 0 auto'
          />
          <StyleMainSkill $inset={'0 auto auto 0'}>Ps</StyleMainSkill>
          <StyleMainSkill $inset={'auto 0 0 auto'}>Ux</StyleMainSkill>
          <StyleMainSkill $inset={'auto auto 0 0'}>&lt;/</StyleMainSkill>
          <StyleMainSkill $inset={'0 0 auto auto'}>Ps</StyleMainSkill>
          <Photo src={photo} />
        </ImageWrapper>
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  background-color: #2A2A2A;
`;

const Photo = styled.img`
  width: 450px;
  height: 600px;
  object-fit: cover;
  position: relative;
  z-index: 2;
`;

const MainTitle = styled.h1`
  
`;

const Name = styled.h2`
  
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