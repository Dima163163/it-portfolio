import { Button } from '../../../components/button/Button';
import photo from '../../../assets/images/photo.png';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';
import { Ellipse } from '../../../components/ellipse/Ellipse';
import { Container } from '../../../components/container/Container';
import { theme } from '../../../styles/Theme';
import { AnimationBorderEffect, TextAnimation } from '../../../styles/animations/Animations';
import { font } from '../../../styles/Common';

type StyleMainSkillPropsType = {
  $inset?: string;
};

export const Main = () => {
  return (
    <StyledMain id={'home'}>
      <Container>
        <FlexWrapper
          $align={'center'}
          $justify={'space-between'}
          $wrap={'wrap'}
        >
          <MainContent>
            <StyledGreeting>Hello</StyledGreeting>
            <NameWrapper>
              <Name>I’m&nbsp;Dmitry</Name>
              <Name>Khlopov</Name>
            </NameWrapper>
            <MainTitle>
              I've been doing front-end development for a year now. Do you need
              a site layout, or maybe a turnkey website? Then contact me
            </MainTitle>
            <Button>Contact me</Button>
          </MainContent>
          <ImageWrapper>
            <Ellipse
              $width='90%'
              $height='89%'
              $boxshadow='0 0 70px 0 rgba(0, 196, 240, 0.42)'
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
            <StyleMainSkill $inset={'16% auto auto 15%'}>SC</StyleMainSkill>
            <StyleMainSkill $inset={'auto auto 45% 0'}>JS</StyleMainSkill>
            <StyleMainSkill $inset={'auto auto 20% 3%'}>&lt;/</StyleMainSkill>
            <StyleMainSkill $inset={'2% 40% auto auto'}>TS</StyleMainSkill>
            <Photo src={photo} alt={photo}/>
          </ImageWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  background-color: ${theme.colors.primaryBg};
  overflow: hidden;
  padding-top: 100px;

  @media (max-width: 1060px){
    padding-top: 120px;
    ${FlexWrapper} {
      justify-content: center;
    }
  }
`;

const MainContent = styled.div`
  max-width: 447px;

  @media ${theme.media.tablet} {
    margin-bottom: 30px;
  }
`;

const StyledGreeting = styled.span`
  ${font({family: '"NEXT ART", sans-serif', weight: 600, Fmax: 48, Fmin: 27})};
  display: block;
  margin-bottom: 27px;

  @media ${theme.media.tablet} {
    font-size: 27px;
    margin-bottom: 12px;
  }
`;

const NameWrapper = styled.div`
  display: inline-block;
  margin-bottom: 27px;

  @media ${theme.media.tablet} {
    margin-bottom: 12px;
  }
`

const Name = styled.div`
  ${font({family: '"NEXT ART", sans-serif', weight: 700, Fmax: 72, Fmin: 27})};
  padding-right: 10px;
  overflow: hidden;
  max-width: fit-content;

  &:first-child {
    border-right: .15em solid ${theme.colors.fontColorFour};
    animation: ${TextAnimation} 3s steps(25, end),
                ${AnimationBorderEffect} 0.7s infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }

  &:last-child {
    border-right: .15em solid ${theme.colors.fontColorFour};
    animation: ${TextAnimation} 3s steps(25, end),
                ${AnimationBorderEffect} 0.7s infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }
`;

const MainTitle = styled.h1`
  font-weight: 300;
  font-size: 18px;
  color: ${theme.colors.fontColorFirst};
  margin-bottom: 27px;
  max-width: 430px;

  @media ${theme.media.mobile} {
    margin-bottom: 12px;
  }
`;

const Photo = styled.img`
  width: 84%;
  height: auto;
  object-fit: cover;
  position: relative;
  z-index: 2;
`;

const ImageWrapper = styled.div`
  position: relative;
  min-width: 632px;
  height: 640px;
  margin-right: -32px;

  img {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  @media ${theme.media.tablet} {
    min-width: 446px;
    height: 463px;
  }

  @media ${theme.media.mobile} {
    min-width: 346px;
    height: 363px;
    margin-right: 0;
  }
`;

const StyleMainSkill = styled.div<StyleMainSkillPropsType>`
  ${font({family: '"NEXT ART", sans-serif', weight: 700, Fmax: 36, Fmin: 18, color: `${theme.colors.fontColorSkill}`})}
  border-radius: 100%;
  width: 90px;
  height: 90px;
  background-image: linear-gradient(135deg,
  ${theme.colors.ellipseBgFirst} 0%,
  ${theme.colors.ellipseBgSecond} 100%);
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 3;
  inset: ${(props) => props.$inset || 'auto'};

  @media ${theme.media.tablet} {
    width: 70px;
    height: 70px;
  }

  @media ${theme.media.mobile} {
    width: 50px;
    height: 50px;
  }
`;
