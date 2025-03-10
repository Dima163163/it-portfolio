import { Slide } from './slide/Slide';
import { S } from '../Slider_Styles';
import React from 'react';

type SlidePropType = {
  title: string;
  text: string;
  src: string;
  srcWebp: string;
};

type SlidesPropsType = {
  slides: SlidePropType[];
  idactiveslide: number;
};

export const Slides: React.FC<SlidesPropsType> = (props: SlidesPropsType) => {
  return (
    <S.Slides>
      {props.slides.length > 0 &&
        props.slides.map((slide, i) => (
          <Slide
            key={i}
            title={slide.title}
            text={slide.text}
            src={slide.src}
            srcWebp={slide.srcWebp}
            idactiveslide={props.idactiveslide}
          />
        ))}
    </S.Slides>
  );
};


