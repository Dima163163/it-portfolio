import styled from 'styled-components';
import { Slide } from './slide/Slide';
import { theme } from '../../../styles/Theme';

type SlidePropType = {
  title: string;
  text: string;
  src: string;
};

type SlidesPropsType = {
  slides: SlidePropType[];
  idactiveslide: number;
};

export const Slides = (props: SlidesPropsType) => {
  return (
    <StyledSlides>
      {props.slides.length > 0 &&
        props.slides.map((slide, i) => (
          <Slide
            key={i}
            title={slide.title}
            text={slide.text}
            src={slide.src}
            idactiveslide={props.idactiveslide}
          />
        ))}
    </StyledSlides>
  );
};

const StyledSlides = styled.div`
  display: flex;
  overflow: hidden;
  max-width: 970px;
  width: 100%;

  @media ${theme.media.laptop} {
    max-width: 100%;
  }
`;
