import styled, { css } from 'styled-components';
import { theme } from '../../styles/Theme';

type MenuPropsType = {
  direction?: string
}

type MenuItemPropsType = {
  $typeItem?: string;
};

const Menu = styled.ul<MenuPropsType>`
  display: flex;
  gap: 30px;
  flex-direction: ${props => props.direction || 'row'};
`;

const Link = styled.a`
  font-weight: 300;
  font-size: 18px;
`

const MenuItem = styled.li<MenuItemPropsType>`
  &:hover {
    ${Link} {
      color: ${theme.colors.firstBgBtn};
    }
  }

  ${(props) =>
    props.$typeItem === 'headerItem' &&
    css`
    position: relative;

    &:after {
      content: '';
      position: absolute;
      background-color: ${theme.colors.firstBgBtn};
      width: 0;
      height: 2px;
      bottom: -5px;
      left: 0;
      transition: 0.6s all;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  `}
`;

export const S = {
  Menu,
  MenuItem,
  Link
};
