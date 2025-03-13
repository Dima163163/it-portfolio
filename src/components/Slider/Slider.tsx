import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import portfolioImage from '../../assets/images/portfolio.png';
import portfolioImage2x from '../../assets/images/portfolio@2x.png';
import portfolioImage3x from '../../assets/images/portfolio@3x.png';
import portfolioImageWebp from '../../assets/images/portfolio.webp';
import portfolioImageWebp2x from '../../assets/images/portfolioWebp@2x.webp';
import portfolioImageWebp3x from '../../assets/images/portfolioWebp@3x.webp';
import { S } from './Slider_Styles';
import { Icon } from '../icon/Icon';
import { BtnEllipse } from '../btnEllipse/BtnEllipse';
import './../../styles/slider.css';
import { useState } from 'react';

type SlidePropsType = {
  id: number;
  title: string;
  text: string;
  src: string;
  src2x: string;
  src3x: string;
  srcWebp: string;
  srcWebp2x: string;
  srcWebp3x: string;
};

type ButtonPropsType = {
  isDisabled: boolean;
};

const slidesItems = [
  {
    id: 0,
    title: 'Landing Ice-cream',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.',
    src: portfolioImage,
    src2x: portfolioImage2x,
    src3x: portfolioImage3x,
    srcWebp: portfolioImageWebp,
    srcWebp2x: portfolioImageWebp2x,
    srcWebp3x: portfolioImageWebp3x,
  },
  {
    id: 1,
    title: 'Landing Ice-cream2222',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.',
    src: portfolioImage,
    src2x: portfolioImage2x,
    src3x: portfolioImage3x,
    srcWebp: portfolioImageWebp,
    srcWebp2x: portfolioImageWebp2x,
    srcWebp3x: portfolioImageWebp3x,
  },
  {
    id: 2,
    title: 'Landing Ice-cream3333',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.',
    src: portfolioImage,
    src2x: portfolioImage2x,
    src3x: portfolioImage3x,
    srcWebp: portfolioImageWebp,
    srcWebp2x: portfolioImageWebp2x,
    srcWebp3x: portfolioImageWebp3x,
  }
];

const Slide = (props: SlidePropsType) => {
  return (
    <S.Slide>
      <picture>
        <source srcSet={`${props.srcWebp} 1x, ${props.srcWebp2x} 2x,${props.srcWebp3x} 3x`} type='image/webp' />
        <source srcSet={`${props.src2x} 2x, ${props.src3x} 3x`} />
        <S.Image src={props.src} alt='image portfolio' />
      </picture>
      <S.SlideContent>
        <S.Title>{props.title}</S.Title>
        <S.Text>{props.text}</S.Text>
        <S.Link href={'#'}>
          More
          <Icon viewBox='2 1 14 10' iconId='btnArrow' />
        </S.Link>
      </S.SlideContent>
    </S.Slide>
  );
};

const PrevButton = ({ isDisabled }: ButtonPropsType) => (
  <BtnEllipse aria-label={'button previous slide'} disabled={isDisabled}>
    <Icon viewBox='0 0 35 35' iconId='arrowLeft' width='35' height='35' />
  </BtnEllipse>
);

const NextButton = ({ isDisabled }: ButtonPropsType) => (
  <BtnEllipse aria-label={'button next slide'} disabled={isDisabled}>
    <Icon viewBox='0 0 35 35' iconId='arrowRight' width='35' height='35' />
  </BtnEllipse>
);

const items = slidesItems.map((item) => (
  <Slide
    id={item.id}
    title={item.title}
    text={item.text}
    src={item.src}
    src2x={item.src2x}
    src3x={item.src3x}
    srcWebp={item.srcWebp}
    srcWebp2x={item.srcWebp2x}
    srcWebp3x={item.srcWebp3x}
  />
));

export const Slider = () => {
  const [idActiveSlide, setIdActiveSlide] = useState(0);

  return (
    <S.Slider>
      <AliceCarousel
        mouseTracking
        items={items}
        renderPrevButton={() => PrevButton({ isDisabled: idActiveSlide === 0 })}
        renderNextButton={() =>
          NextButton({ isDisabled: idActiveSlide === slidesItems.length - 1 })
        }
        onSlideChanged={(e) => {
          setIdActiveSlide(e.item);
        }}
      />
    </S.Slider>
  );
};
