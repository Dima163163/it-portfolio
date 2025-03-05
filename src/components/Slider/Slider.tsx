import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { Slides } from './slides/Slides';
import { BtnEllipse } from '../btnEllipse/BtnEllipse';
import { useState } from 'react';
import portfolioImage from '../../assets/images/portfolio.png';

const slides = [
  {
    title: 'Landing Ice-cream',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.',
    src: portfolioImage
  },
  {
    title: 'Landing Ice-cream2222',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.',
    src: portfolioImage
  },
  {
    title: 'Landing Ice-cream3333',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.',
    src: portfolioImage
  }
];

export const Slider = () => {
  const [idActiveSlide, setIdActiveSlide] = useState(0);

  const changeNextSlide = () => {
    if (idActiveSlide < slides.length - 1) {
      setIdActiveSlide((prevSlide) => prevSlide + 1);
    }
  };

  const changePrevSlide = () => {
    if (idActiveSlide > 0) {
      setIdActiveSlide((prevSlide) => prevSlide - 1);
    }
  };

  return (
    <StyledSlider>
      <BtnEllipse aria-label={'button previous slide'} onClick={changePrevSlide} disabled={idActiveSlide === 0}>
        <Icon width='35' height='35' viewBox='0 0 35 35' iconId='arrowLeft' />
      </BtnEllipse>
      <Slides slides={slides} idactiveslide={idActiveSlide} />
      <BtnEllipse
        aria-label={'button next slide'}
        onClick={changeNextSlide}
        disabled={idActiveSlide === slides.length - 1}
      >
        <Icon width='35' height='35' viewBox='0 0 35 35' iconId='arrowRight' />
      </BtnEllipse>
    </StyledSlider>
  );
};

const StyledSlider = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;
