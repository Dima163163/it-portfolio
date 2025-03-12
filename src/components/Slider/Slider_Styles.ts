import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { AnimationButton } from '../../styles/animations/Animations';

const Slider = styled.div`
  max-width: 970px;
  margin: 0 auto;
`;

const Slide = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  padding: 50px;
  gap: 30px;
  box-shadow: 0 4px 15px 0 rgba(27, 27, 27, 0.28);
  background-image: linear-gradient(135deg, ${theme.colors.secondaryBg} 0%, ${
  theme.colors.thirdBg
} 100%);
  border-radius: 29px;
  transition: 0.6s all;
  margin-bottom: 20px;

  @media ${theme.media.laptop} {
    flex-direction: column;
    align-items: center;
    gap: 57px;
  }

  @media ${theme.media.tablet} {
    padding: 30px 25px;
  }
`;

const Image = styled.img`
  max-width: 493px;
  width: 100%;
  height: 500px;
  border-radius: 29px;
  object-fit: cover;
  object-position: 15%;

  @media ${theme.media.tablet} {
    max-width: 100%;
  }

  @media ${theme.media.mobile} {
    max-width: 100%;
    height: 318px;
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
  align-items: center;
  color: ${theme.colors.firstBgBtn};
  gap: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 300;
  max-width: 63px;
  width: 100%;

  svg {
    display: inline-block;
    min-width: 14px;
    height: 8px;
  }


  &:hover {
    color: ${theme.colors.fontColorSecond};
    animation: ${AnimationButton} 0.8s ease-in-out infinite;
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.firstBgBtn};
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
  Slide,
  Image,
  SlideContent,
  Title,
  Text,
  Link,
};
