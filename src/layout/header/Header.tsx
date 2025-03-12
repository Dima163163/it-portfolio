import { Logo } from '../../components/logo/Logo';

import { DesktopMenu } from './headerMenu/desktopMenu/DesktopMenu';
import { MobileMenu } from './headerMenu/mobileMenu/MobileMenu';
import React, { useEffect, useState } from 'react';
import { S } from './Header_Styles';
import { Container } from '../../components/container/Container';
import { FlexWrapper } from '../../components/flexWrapper/FlexWrapper';

// const items = ['Home', 'Skills', 'About me', 'Portfolio', 'Contact'];

export const Header: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint= 768;

  useEffect(() => {
    const handleWidthResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWidthResize);

    return () => window.removeEventListener('resize', handleWidthResize)
  }, [])

  return (
    <S.Header>
      <Container>
        <FlexWrapper $justify={'space-between'} $align={'center'}>
          <Logo />
          {width <= breakpoint ? <MobileMenu /> : <DesktopMenu />}
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};


