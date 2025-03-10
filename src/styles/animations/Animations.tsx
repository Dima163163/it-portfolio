import { keyframes } from 'styled-components';
import { theme } from '../Theme';

export const TextAnimation = keyframes`
  from {
    width: 0;
  } to {
    width: 100%;
  }
`

export const AnimationBorderEffect = keyframes`
  from {
    border-color: transparent
  } to {
    border-color: ${theme.colors.fontColorFour};
  }
`

export const AnimationButton = keyframes`
  from {
    transform: scale(1);
  } to {
    transform: scale(1.2);
  }
`