import styled from 'styled-components';
import { ListItem } from '../../../components/listItem/ListItem';
import { Link } from '../../../components/link/Link';

type FooterMenuPropsType = {
  menuItems: Array<string>;
};

export const FooterMenu = (props: FooterMenuPropsType) => {
  return (
    <StyledFooterMenu>
      {props.menuItems.length > 0 &&
        props.menuItems.map((item, i) => (
          <ListItem key={i}>
            <Link href={`#${item.toLowerCase()}`}>{item}</Link>
          </ListItem>
        ))}
    </StyledFooterMenu>
  );
};

const StyledFooterMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
