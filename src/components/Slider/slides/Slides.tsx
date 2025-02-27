import styled from 'styled-components';
import portfolioImage from '../../../assets/images/portfolio.png';
import { Slide } from './slide/Slide';

const slides = [
  {
    title: 'Landing Ice-cream',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.',
    src: portfolioImage
  },
  {
    title: 'Landing Ice-cream',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.',
    src: portfolioImage
  },
  {
    title: 'Landing Ice-cream',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.',
    src: portfolioImage
  },
]

export const Slides = () => {
  return (
    <StyledSlides>
      {slides.length > 0 && slides.map((slide, i) => (
        <Slide key={i} title={slide.title} text={slide.text} src={slide.src}/>
      ))}
    </StyledSlides>
  )
}

const StyledSlides = styled.div`
  display: flex;
  overflow: hidden;
  max-width: 970px;
  width: 100%;
`

