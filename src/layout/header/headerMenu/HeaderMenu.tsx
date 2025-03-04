import styled from 'styled-components';
import { ListItem } from '../../../components/listItem/ListItem';
import { Link } from '../../../components/link/Link';

type HeaderMenuPropsType = {
  menuItems: Array<string>;
};

export const HeaderMenu = (props: HeaderMenuPropsType) => {
  return (
    <StyledHeaderMenu>
      <ul>
        {props.menuItems.length > 0 &&
          props.menuItems.map((item, i) => (
            <ListItem key={i} $typeItem='headerItem'>
              <Link href={`#${item.toLowerCase()}`}>{item}</Link>
            </ListItem>
          ))}
      </ul>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    flex-direction: row;
  }
`;