import styled from 'styled-components';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';
import { AnimationBorderEffect, TextAnimation } from '../../../styles/animations/Animations';

type MainSkillPropsType = {
  $inset?: string;
};

const Main = styled.section`
  background-color: ${theme.colors.primaryBg};
  overflow: hidden;
  padding-top: 100px;

  @media (max-width: 1060px){
    padding-top: 120px;
  }
`;

const MainContent = styled.div`
  max-width: 447px;

  @media ${theme.media.laptop} {
    min-width: 100%;
  }

  @media ${theme.media.tablet} {
    margin-bottom: 30px;
  }
`;

const Greeting = styled.span`
  ${font({family: '"NEXT ART", sans-serif', weight: 600, Fmax: 48, Fmin: 27})};
  display: block;
  margin-bottom: 27px;

  @media ${theme.media.tablet} {
    font-size: 27px;
    margin-bottom: 12px;
  }
`;

const MainName = styled.p`
  ${font({family: '"NEXT ART", sans-serif', weight: 700, Fmax: 72, Fmin: 27})};

  & + & {
    margin-bottom: 27px;
  }

  @media ${theme.media.tablet} {
    & + & {
      margin-bottom: 12px;
    }
  }
`;

const DescriptionWrapper = styled.div`
  display: inline-block;
  margin-bottom: 27px;
  padding-right: 10px;
  overflow: hidden;

  border-right: .15em solid ${theme.colors.fontColorFour};
  animation: ${TextAnimation} 3s steps(25, end),
                ${AnimationBorderEffect} 0.7s infinite;

  @media ${theme.media.tablet} {
    margin-bottom: 12px;
  }
`


const Description = styled.h1`
  ${font({family: '"NEXT ART", sans-serif', weight: 700, Fmax: 34, Fmin: 22})};
  white-space: nowrap;
`;

const MainInfo = styled.p`
  font-weight: 300;
  font-size: 18px;
  color: ${theme.colors.fontColorFirst};
  margin-bottom: 27px;

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

  @media ${theme.media.laptop} {
    margin: 0 auto;
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

const MainSkill = styled.div<MainSkillPropsType>`
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


export const S = {
  Main,
  MainContent,
  Greeting,
  DescriptionWrapper,
  MainName,
  Description,
  MainInfo,
  Photo,
  ImageWrapper,
  MainSkill
}