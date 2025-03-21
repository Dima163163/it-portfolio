import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const BtnEllipse = styled.button`
  border-radius: 100%;
  background-image: linear-gradient(315deg, ${theme.colors.firstBgBtn} 0%, ${theme.colors.secondBgBtn} 100%);
  border: 2px solid transparent;
  min-width: 60px;
  height: 60px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${theme.colors.fontColorFirst};
  transition: ${theme.animation.transition};

  &:hover {
    background: transparent;
    border-color: ${theme.colors.secondBgBtn};
    color: ${theme.colors.secondBgBtn};
  }

  &:focus {
    outline: none;
    background: transparent;
    border-color: ${theme.colors.secondBgBtn};
    color: ${theme.colors.secondBgBtn};
  }

  &:disabled {
    background: ${theme.colors.thirdBgBtn};
    border-color: transparent;
    pointer-events: none;
    color: ${theme.colors.fontColorFirst};
  }

  &:active {
    transform: translateY(4px);
  }
`;