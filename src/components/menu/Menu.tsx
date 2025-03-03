import styled from 'styled-components';
import { theme } from '../../styles/Theme';

type menuPropsType = {
  menuItems: Array<string>;
  direction?: string;
  gap?: string;
};

type StyledMenuPropsType = {
  $direction?: string;
  $gap?: string;
};

export const Menu = (props: menuPropsType) => {
  return (
    <StyledMenu $direction={props.direction} $gap={props.gap}>
      {props.menuItems.length > 0 &&
        props.menuItems.map((item, i) => (
          <li key={i}>
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
    </StyledMenu>
  );
};

const StyledMenu = styled.ul<StyledMenuPropsType>`
  display: flex;
  gap: ${(props) => props.$gap || '30px'};
  flex-direction: ${(props) => props.$direction || 'row'};

  a {
    color: ${theme.colors.fontColorFirst};
  }

  a:hover {
    color: ${theme.colors.firstBgBtn};
  }
`;
