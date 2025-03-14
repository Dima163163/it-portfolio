import styled from 'styled-components';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';
import { Ellipse } from '../../../components/ellipse/Ellipse';

type MainSkillPropsType = {
  $inset?: string;
};

const Main = styled.section`
  background-color: ${theme.colors.primaryBg};
  overflow: hidden;
  padding-top: 230px;

  @media ${theme.media.laptop} {
    padding-top: 135px;
  }
`;

const MainContent = styled.div`
  padding-bottom: 142px;
  max-width: 447px;

  @media ${theme.media.laptop} {
    padding-bottom: 0;
    min-width: 100%;
  }

  @media ${theme.media.tablet} {
    margin-bottom: 30px;
  }
`;

const Greeting = styled.span`
  ${font({family: '"NEXT ART", sans-serif', weight: 600, Fmax: 48, Fmin: 27})};
  display: block;
  margin-bottom: 8px;

  @media ${theme.media.tablet} {
    font-size: 27px;
    margin-bottom: 8px;
  }
`;

const MainName = styled.p`
  ${font({family: '"NEXT ART", sans-serif', weight: 700, Fmax: 72, Fmin: 52})};
  line-height: 120%;

  & + & {
    margin-bottom: 27px;
  }

  @media ${theme.media.tablet} {
    & {
      line-height: 110%;
      margin-bottom: 2px;
    }

    & + & {
      margin-bottom: 20px;
    }
  }
`;


const Description = styled.h1`
  ${font({family: '"NEXT ART", sans-serif', weight: 700, Fmax: 34, Fmin: 22})};
  white-space: nowrap;
  margin-bottom: 27px;

  p {
    display: none;
  }
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

  ${Ellipse} {
    position: absolute;
    z-index: 2;
    bottom: 0;
    right: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -40px;
    right: -40px;
    bottom: -40px;
    background: linear-gradient(to bottom, transparent 0%, rgba(65, 65, 65, 0.23) 70%,#1f1f1f 80%, #1f1f1f 100%);
    z-index: 4;
    filter: blur(15px)
  }

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
  MainName,
  Description,
  MainInfo,
  Photo,
  ImageWrapper,
  MainSkill
}