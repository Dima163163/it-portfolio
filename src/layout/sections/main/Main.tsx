import { Button } from '../../../components/button/Button';
import photo from '../../../assets/images/photo.png';
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';
import { Ellipse } from '../../../components/ellipse/Ellipse';
import { Container } from '../../../components/container/Container';
import { S } from './Main_Styles';
import React from 'react';



export const Main: React.FC = () => {
  return (
    <S.Main id={'home'}>
      <Container>
        <FlexWrapper
          $align={'end'}
          $justify={'space-between'}
          $wrap={'wrap'}
        >
          <S.MainContent>
            <S.Greeting>Hello</S.Greeting>
            <S.MainName>I’m&nbsp;Dmitry</S.MainName>
            <S.MainName>Khlopov</S.MainName>
            <S.DescriptionWrapper>
              <S.Description>I’m frontend developer</S.Description>
            </S.DescriptionWrapper>
            <S.MainInfo>
              I've been doing front-end development for a year now. Do you need
              a site layout, or maybe a turnkey website? Then contact me!
            </S.MainInfo>
            <Button>Contact me</Button>
          </S.MainContent>
          <S.ImageWrapper>
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
            <S.MainSkill $inset={'16% auto auto 15%'}>SC</S.MainSkill>
            <S.MainSkill $inset={'auto auto 45% 0'}>JS</S.MainSkill>
            <S.MainSkill $inset={'auto auto 20% 3%'}>&lt;/</S.MainSkill>
            <S.MainSkill $inset={'2% 40% auto auto'}>TS</S.MainSkill>
            <S.Photo src={photo} alt={photo}/>
          </S.ImageWrapper>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
