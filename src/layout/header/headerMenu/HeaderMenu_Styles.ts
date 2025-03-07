import styled, { css } from 'styled-components';
import { theme } from '../../../styles/Theme';

const DesktopMenu = styled.nav`
  @media ${theme.media.tablet} {
    display: none;
  }
`;

const MobileMenu = styled.nav``;

const BurgerButton = styled.button<{ $isOpen: boolean }>`
  width: 36px;
  height: 36px;
  position: fixed;
  top: 32px;
  right: 15px;
  z-index: 201;
  padding: 10px 2px;
  cursor: pointer;

  span {
    display: block;
    width: 32px;
    height: 5px;
    background-color: ${theme.colors.fourBgBtn};
    border-radius: 10px;
    transition: 0.6s all;

    &:first-child {
      margin-bottom: 6px;
    }
  }

  ${(props) =>
    props.$isOpen &&
    css<{ $isOpen: boolean }>`
    background-color: rgba(255, 255, 255, 0);

    span {
      &:first-child {
        margin-bottom: -5px;
        transform: rotate(-45deg) translateY(0);
      }

      &:last-child {
        transform: rotate(45deg) translateY(0);
      }
    }
  `}
`;

const MobileMenuPopup = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 200;
  background-color: ${theme.colors.primaryBg};
  transform: translateX(100%);
  transition: 0.6s all;
  display: flex;

  ul {
    flex-direction: column;
    align-items: center;
  }

  ${(props) =>
    props.$isOpen &&
    css<{ $isOpen: boolean }>`
    justify-content: center;
    align-items: center;
    transform: translateX(0);
  `}
`;


export const S = {
  DesktopMenu,
  MobileMenu,
  BurgerButton,
  MobileMenuPopup
}