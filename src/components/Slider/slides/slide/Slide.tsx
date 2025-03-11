import React from 'react';
import { Icon } from '../../../icon/Icon';
import { S } from '../../Slider_Styles';

type SlidePropsType = {
  title: string;
  text: string;
  src: string;
  srcWebp: string;
  idactiveslide: number;
};

export const Slide: React.FC<SlidePropsType> = (props: SlidePropsType) => {
  return (
    <S.Slide $idactiveslide={props.idactiveslide}>
      <picture>
        <source srcSet={props.srcWebp} type='image/webp'/>
        <S.Image src={props.src} alt='image portfolio' />
      </picture>
      <S.SlideContent>
        <S.Title>{props.title}</S.Title>
        <S.Text>{props.text}</S.Text>
        <S.Link href={'#'}>
          <span>More</span>
          <S.BtnIconWrapper>
            <Icon viewBox='2 1 14 10' iconId='btnArrow' />
          </S.BtnIconWrapper>
        </S.Link>
      </S.SlideContent>
    </S.Slide>
  );
};
