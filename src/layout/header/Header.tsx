import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { Container } from '../../components/container/Container';
import { FlexWrapper } from '../../components/flexWrapper/FlexWrapper';

const items = ['Home', 'Skills', 'About me', 'Portfolio', 'Contact'];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper $justify={'space-between'} $align={'center'}>
          <Logo />
          <Nav>
            <Menu menuItems={items} />
          </Nav>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  z-index: 5;
  background-color: #1f1f1f;
  padding: 26px 0;

  li {
    position: relative;
  }

  li:after {
    content: '';
    position: absolute;
    background: #e2a300;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    transition: 0.6s all;
  }

  li:hover:after {
    width: 100%;
  }

`;

const Nav = styled.nav`
  
`;
