import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { BtnEllipse } from '../btnEllipse/BtnEllipse';
import { AnimationButton } from '../../styles/animations/Animations';

type ImagePropsType = {
  src: string;
};

type SlidePropsType = {
  $idactiveslide: number;
};

const Slider = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;

  @media ${theme.media.laptop} {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0;

    ${BtnEllipse}:first-child {
      order: 1;
      margin-right: 58px;
    }

    ${BtnEllipse}:last-child {
      order: 2;
    }
  }
`;

const IconWrapper = styled.div`
  width: 35px;
  height: 35px;
`;

const Slide = styled.div<SlidePropsType>`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  min-width: 100%;
  padding: 50px;
  gap: 30px;
  box-shadow: 0 4px 15px 0 rgba(27, 27, 27, 0.28);
  background-image: linear-gradient(135deg, ${theme.colors.secondaryBg} 0%, ${
  theme.colors.thirdBg
} 100%);
  border-radius: 29px;
  transform: translateX(${(props) => props.$idactiveslide * -100}%);
  transition: 0.6s all;

  @media ${theme.media.laptop} {
    flex-direction: column;
    align-items: center;
    gap: 57px;
  }

  @media ${theme.media.tablet} {
    padding: 30px 25px;
  }
`;

const Image = styled.div<ImagePropsType>`
  min-width: 493px;
  height: 500px;
  overflow: hidden;
  position: relative;
  border-radius: 29px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 15%;

  @media ${theme.media.tablet} {
    max-width: 100%;
    min-width: 100%;
  }

  @media ${theme.media.mobile} {
    max-width: 100%;
    min-width: 100%;
    height: 318px;
    background-position: 22%;
  }
`;

const SlideContent = styled.div`
  padding-top: 32px;
  max-width: 296px;

  @media ${theme.media.laptop} {
    padding-top: 0;
    max-width: 100%;
  }
`;

const Title = styled.h3`
  font-weight: 300;
  font-size: 24px;
  color: ${theme.colors.fontColorSecond};
  margin-bottom: 26px;
`;

const Text = styled.p`
  font-weight: 300;
  font-size: 18px;
  color: ${theme.colors.fontColorSecond};
  max-width: 100%;
  margin-bottom: 28px;
`;

const Link = styled.a`
  display: inline-flex;
  justify-content: space-between;
  color: ${theme.colors.firstBgBtn};
  gap: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 300;
  max-width: 63px;
  width: 100%;


  &:hover {
    color: ${theme.colors.fontColorSecond};
    animation: ${AnimationButton} 0.8s ease-in-out infinite;
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.firstBgBtn};
  }

`;

const BtnIconWrapper = styled.div`
  display: inline-block;
  min-width: 14px;
  height: 8px;

  svg {
    stroke:${theme.colors.firstBgBtn};
  }

  &:hover {
    svg {
      stroke:${theme.colors.fontColorSecond};
    }
  }

    &:focus-visible {
    svg {
      stroke:${theme.colors.fontColorSecond};
    }
  }
`;

const Slides = styled.div`
  display: flex;
  overflow: hidden;
  max-width: 970px;
  width: 100%;

  @media ${theme.media.laptop} {
    max-width: 100%;
    margin-bottom: 50px;
  }
`;

export const S = {
  Slides,
  Slider,
  IconWrapper,
  Slide,
  Image,
  SlideContent,
  Title,
  Text,
  Link,
  BtnIconWrapper
};
