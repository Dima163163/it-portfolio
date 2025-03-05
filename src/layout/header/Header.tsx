import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Container } from '../../components/container/Container';
import { FlexWrapper } from '../../components/flexWrapper/FlexWrapper';
import { theme } from '../../styles/Theme';
import { HeaderMenu } from './headerMenu/HeaderMenu';
import { MobileMenu } from './mobileMenu/MobileMenu';
import { useState } from 'react';

const items = ['Home', 'Skills', 'About me', 'Portfolio', 'Contact'];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <StyledHeader>
      <Container>
        <FlexWrapper $justify={'space-between'} $align={'center'}>
          <Logo />
          <HeaderMenu menuItems={items} />
          <MobileMenu menuItems={items} isOpen={isOpen} openMenu={openMenu}/>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  z-index: 5;
  background-color: ${theme.colors.primaryBg};
  padding: 26px 0;
`;
