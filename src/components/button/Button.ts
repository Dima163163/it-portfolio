import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const Button = styled.button`
  cursor: pointer;
  padding: 10px 40px 10px 40px;
  border-radius: 6px;
  border: 2px solid transparent;
  box-shadow: 0 2px 13px 0 rgba(226, 158, 0, 0.48);
  background-image: linear-gradient(315deg, ${theme.colors.firstBgBtn} 0%, ${theme.colors.secondBgBtn} 100%);
  text-transform: uppercase;
  font-family: 'NEXT ART', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: ${theme.colors.fontColorThird};
  transition: ${theme.animation.transition};

  &:hover {
    background: none;
    border-color: ${theme.colors.firstBgBtn};
    color: ${theme.colors.secondBgBtn};
  }

  &:focus {
    outline: none;
    background: none;
    border-color: ${theme.colors.firstBgBtn};
    color: ${theme.colors.secondBgBtn};
  }

  &:active {
    transform: translateY(4px);
  }
`;