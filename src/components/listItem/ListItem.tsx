import styled, { css } from 'styled-components';
import { theme } from '../../styles/Theme';
import { Link } from '../link/Link';

type ListItemPropsType = {
  typeItem?: string;
};

export const ListItem = styled.li<ListItemPropsType>`
  &:hover {
    ${Link} {
      color: ${theme.colors.firstBgBtn};
    }
  }

  ${(props) =>
    props.typeItem === 'headerItem' &&
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
