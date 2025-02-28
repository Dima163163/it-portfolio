import { Button } from '../../../components/button/Button';
import photo from '../../../assets/images/photo.png';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';
import { Ellipse } from '../../../components/ellipse/Ellipse';
import { Container } from '../../../components/container/Container';

type StyleMainSkillPropsType = {
  $inset?: string;
};

export const Main = () => {
  return (
    <StyledMain id={'main'}>
      <Container>
        <FlexWrapper $align={'center'} $justify={'space-between'} $gap={'30px'} $wrap={'wrap'}>
          <MainContent>
            <StyledGreeting>Hello</StyledGreeting>
            <Name>I’m Dmitry Khlopov</Name>
            <MainTitle>
              I've been doing front-end development for a year now. Do you need
              a site layout, or maybe a turnkey website? Then contact me
            </MainTitle>
            <Button>Contact me</Button>
          </MainContent>
          <ImageWrapper>
            <Ellipse
              $width='575px'
              $height='575px'
              $boxshadowcolor='0 4px 70px 0 rgba(0, 196, 240, 0.42)'
              $inset='auto 0 0 auto'
            >
              <svg
                viewBox='152 152 575 575'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle
                  cx='439.5'
                  cy='439.972'
                  r='254'
                  stroke='#00C4F0'
                  strokeWidth='67'
                  shapeRendering='crispEdges'
                />
              </svg>
            </Ellipse>
            <StyleMainSkill $inset={'18% auto auto 15%'}>SC</StyleMainSkill>
            <StyleMainSkill $inset={'auto auto 45% 0'}>JS</StyleMainSkill>
            <StyleMainSkill $inset={'auto auto 20% 3%'}>&lt;/</StyleMainSkill>
            <StyleMainSkill $inset={'8% 40% auto auto'}>TS</StyleMainSkill>
            <Photo src={photo} />
          </ImageWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  background-color: #1f1f1f;
  overflow: hidden;
  padding-top: 100px;
`;

const MainContent = styled.div`
  max-width: 447px;
`;

const StyledGreeting = styled.span`
  font-family: "NEXT ART", sans-serif;
  font-weight: 600;
  font-size: 48px;
  color: #e4e4e4;
  margin-bottom: 27px;
`;

const Name = styled.span`
  display: inline-block;
  font-family: "NEXT ART", sans-serif;
  font-weight: 700;
  font-size: 72px;
  color: #e4e4e4;
  margin-bottom: 27px;
`;

const MainTitle = styled.h1`
  font-weight: 300;
  font-size: 18px;
  color: #e4e4e4;
  margin-bottom: 27px;
  max-width: 430px;
`;

const Photo = styled.img`
  width: 84%;
  object-fit: cover;
  position: relative;
  z-index: 2;
`;


const ImageWrapper = styled.div`
  position: relative;
  min-width: 632px;
  height: 674px;
  margin-right: -32px;

  img {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

const StyleMainSkill = styled.div<StyleMainSkillPropsType>`
font-family: "NEXT ART", sans-serif;
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
  inset: ${(props) => props.$inset || 'auto'};
`;
