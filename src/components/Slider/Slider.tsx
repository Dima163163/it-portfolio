import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import portfolioImage from '../../assets/images/portfolio.png';
import portfolioImageWebp from '../../assets/images/portfolio.webp';
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
  srcWebp: string;
}

const slidesItems = [
  {
    id: 0,
    title: 'Landing Ice-cream',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.',
    src: portfolioImage,
    srcWebp: portfolioImageWebp
  },
  {
    id: 1,
    title: 'Landing Ice-cream2222',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.',
    src: portfolioImage,
    srcWebp: portfolioImageWebp
  },
  {
    id: 2,
    title: 'Landing Ice-cream3333',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.',
    src: portfolioImage,
    srcWebp: portfolioImageWebp
  }
];

const Slide = (props: SlidePropsType) => {
  return (
    <S.Slide>
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
  )
}

type ButtonPropsType = {
  isDisabled: boolean
}

const PrevButton = ({isDisabled} : ButtonPropsType) => (
  <BtnEllipse
    aria-label={'button previous slide'}
    disabled={isDisabled}
  >
    <S.IconWrapper>
      <Icon viewBox='0 0 35 35' iconId='arrowLeft' />
    </S.IconWrapper>
  </BtnEllipse>
)

const NextButton = ({isDisabled} : ButtonPropsType) => (
  <BtnEllipse
  aria-label={'button next slide'}
  disabled={isDisabled}
  >
    <S.IconWrapper>
      <Icon viewBox='0 0 35 35' iconId='arrowRight' />
    </S.IconWrapper>
  </BtnEllipse>
)

const items = slidesItems.map((item) => (
  <Slide id={item.id} title={item.title} text={item.text} src={item.src} srcWebp={item.srcWebp} />
));

export const Slider = () => {
  const [idActiveSlide, setIdActiveSlide] = useState(0);

  return (
      <S.Slider>
      <AliceCarousel
        mouseTracking
        items={items}
        renderPrevButton={() => PrevButton({isDisabled: idActiveSlide === 0})}
        renderNextButton={() => NextButton({isDisabled: idActiveSlide === slidesItems.length - 1})}
        onSlideChanged={(e) => {
          setIdActiveSlide(e.item)
        }}
      />
  </S.Slider>
  )
};

// import { Icon } from '../icon/Icon';
// import { Slides } from './slides/Slides';
// import { BtnEllipse } from '../btnEllipse/BtnEllipse';
// import React, { useState } from 'react';
// import portfolioImage from '../../assets/images/portfolio.png';
// import portfolioImageWebp from '../../assets/images/portfolio.webp';
// import { S } from './Slider_Styles';

// const slides = [
//   {
//     title: 'Landing Ice-cream',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.',
//     src: portfolioImage,
//     srcWebp: portfolioImageWebp
//   },
//   {
//     title: 'Landing Ice-cream2222',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.',
//     src: portfolioImage,
//     srcWebp: portfolioImageWebp
//   },
//   {
//     title: 'Landing Ice-cream3333',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.',
//     src: portfolioImage,
//     srcWebp: portfolioImageWebp
//   }
// ];

// export const Slider: React.FC = () => {
//   const [idActiveSlide, setIdActiveSlide] = useState(0);

//   const changeNextSlide = () => {
//     if (idActiveSlide < slides.length - 1) {
//       setIdActiveSlide((prevSlide) => prevSlide + 1);
//     }
//   };

//   const changePrevSlide = () => {
//     if (idActiveSlide > 0) {
//       setIdActiveSlide((prevSlide) => prevSlide - 1);
//     }
//   };

//   return (
//     <S.Slider>
//       <BtnEllipse
//         aria-label={'button previous slide'}
//         onClick={changePrevSlide}
//         disabled={idActiveSlide === 0}
//       >
//         <S.IconWrapper>
//           <Icon viewBox='0 0 35 35' iconId='arrowLeft' />
//         </S.IconWrapper>
//       </BtnEllipse>
//       <Slides slides={slides} idactiveslide={idActiveSlide} />
//       <BtnEllipse
//         aria-label={'button next slide'}
//         onClick={changeNextSlide}
//         disabled={idActiveSlide === slides.length - 1}
//       >
//         <S.IconWrapper>
//           <Icon viewBox='0 0 35 35' iconId='arrowRight' />
//         </S.IconWrapper>
//       </BtnEllipse>
//     </S.Slider>
//   );
// };
