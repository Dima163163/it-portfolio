import styled from 'styled-components';
import { MenuItem } from '../../../components/menutem/MenuItem';
import { Link } from '../../../components/link/Link';
import { theme } from '../../../styles/Theme';

type HeaderMenuPropsType = {
  menuItems: Array<string>;
};

export const HeaderMenu = (props: HeaderMenuPropsType) => {
  return (
    <StyledHeaderMenu>
      <Menu role='menu'>
        {props.menuItems.length > 0 &&
          props.menuItems.map((item, i) => (
            <MenuItem role='menuitem' key={i} $typeItem='headerItem'>
              <Link href={`#${item.toLowerCase()}`}>{item}</Link>
            </MenuItem>
          ))}
      </Menu>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
  @media ${theme.media.tablet} {
    display: none;
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 30px;
  flex-direction: row;
`