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
`;

const SlideContent = styled.div`
  padding-top: 42px;
`;

const Title = styled.h4`
  font-weight: 300;
  font-size: 24px;
  color: ${theme.colors.fontColorSecond};
  margin-bottom: 25px;
`;

const Text = styled.p`
  font-weight: 300;
  font-size: 18px;
  color: ${theme.colors.fontColorSecond};
  max-width: 290px;
  margin-bottom: 25px;
`;

const Link = styled.a`
  display: block;
  color: ${theme.colors.firstBgBtn};
  cursor: pointer;

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
`;
