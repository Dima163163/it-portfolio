import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Container } from '../../components/container/Container';
import { FlexWrapper } from '../../components/flexWrapper/FlexWrapper';
import { theme } from '../../styles/Theme';
import { HeaderMenu } from './headerMenu/HeaderMenu';

const items = ['Home', 'Skills', 'About me', 'Portfolio', 'Contact'];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper $justify={'space-between'} $align={'center'}>
          <Logo />
          <HeaderMenu menuItems={items} />
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
