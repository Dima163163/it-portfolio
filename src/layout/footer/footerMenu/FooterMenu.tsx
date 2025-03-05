import styled from 'styled-components';
import { MenuItem } from '../../../components/menutem/MenuItem';
import { Link } from '../../../components/link/Link';

type FooterMenuPropsType = {
  menuItems: Array<string>;
};

export const FooterMenu = (props: FooterMenuPropsType) => {
  return (
    <StyledFooterMenu role='menu'>
      {props.menuItems.length > 0 &&
        props.menuItems.map((item, i) => (
          <MenuItem role='menuitem' key={i}>
            <Link href={`#${item.toLowerCase()}`}>{item}</Link>
          </MenuItem>
        ))}
    </StyledFooterMenu>
  );
};

const StyledFooterMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
