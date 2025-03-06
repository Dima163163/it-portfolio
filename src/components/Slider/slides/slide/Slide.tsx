import styled from 'styled-components';
import { Icon } from '../../../icon/Icon';
import { theme } from '../../../../styles/Theme';

type SlidePropsType = {
  title: string;
  text: string;
  src: string;
  idactiveslide: number;
};

type StyledSlidePropsType = {
  $idactiveslide: number;
};

export const Slide = (props: SlidePropsType) => {
  return (
    <StyledSlide $idactiveslide={props.idactiveslide}>
      <StyledImage src={props.src} />
      <SlideContent>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <Link>
          <span>More</span>
          <Icon width='14' height='10' viewBox='2 1 14 10' iconId='btnArrow' />
        </Link>
      </SlideContent>
    </StyledSlide>
  );
};

const StyledSlide = styled.div<StyledSlidePropsType>`
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

type StyledImagePropsType = {
  src: string;
};

const StyledImage = styled.div<StyledImagePropsType>`
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
  }
`;

const SlideContent = styled.div`
  padding-top: 42px;
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
  margin-bottom: 25px;
`;

const Text = styled.p`
  font-weight: 300;
  font-size: 18px;
  color: ${theme.colors.fontColorSecond};
  max-width: 100%;
  margin-bottom: 25px;
`;

const Link = styled.a`
  display: inline-block;
  color: ${theme.colors.firstBgBtn};
  cursor: pointer;
  padding: 3px;

  svg {
    stroke:${theme.colors.firstBgBtn};
  }

  span {
    margin-right: 7px;
  }

  &:hover {
    color: ${theme.colors.fontColorSecond};

    svg {
      stroke:${theme.colors.fontColorSecond};
    }
  }

  &:focus-visible {
    outline: 1px solid ${theme.colors.firstBgBtn};

    svg {
      stroke:${theme.colors.fontColorSecond};
    }
  }
`;
