import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';

const items = ['Home', 'About me', 'Portfolio', 'Contact']

export const Header = () => {
  return (
    <StyledHeader>
      <Logo/>
      <Nav>
        <Menu menuItems={items}/>
      </Nav>
    </StyledHeader>
  )
};


const StyledHeader = styled.header`
  background-color: #1f1f1f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 26px 0;
`

const Nav = styled.nav`
  
`