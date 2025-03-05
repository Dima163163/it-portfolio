import styled from 'styled-components';
import { FlexWrapper } from '../../components/flexWrapper/FlexWrapper';
import { Logo } from '../../components/logo/Logo';
import { BtnEllipse } from '../../components/btnEllipse/BtnEllipse';
import { Icon } from '../../components/icon/Icon';
import { Container } from '../../components/container/Container';
import { theme } from '../../styles/Theme';
import { FooterMenu } from './footerMenu/FooterMenu';

const items = ['Home', 'About me', 'Portfolio', 'Contact'];

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterContent>
          <FooterMenu  menuItems={items} />
          <FlexWrapper $direction='column'>
            <FooterTitle>Contact:</FooterTitle>
            <FooterList>
              <FooterItem>
                Inst: <FooterLink href='#'>timdim</FooterLink>
              </FooterItem>
              <FooterItem>
                Email:{' '}
                <FooterLink href='mailto:Email: notitanic33@gmail.com'>
                  timdim@gmail.com
                </FooterLink>
              </FooterItem>
              <FooterItem>
                Calls:{' '}
                <FooterLink href='tel:+78467777777'>
                  +7 (846) - 777 - 77 - 77
                </FooterLink>
              </FooterItem>
            </FooterList>
          </FlexWrapper>
          <FlexWrapper $direction={'column'} $justify={'space-between'} $gap={'55px'}>
            <FooterBox>
              <Logo />
              <BtnEllipse as={'a'} href='#main' aria-label={'button top site'}>
                <Icon
                  width='36'
                  height='36'
                  viewBox='0 0 36 36'
                  iconId='arrowTop'
                />
              </BtnEllipse>
            </FooterBox>
            <CopyrightWrapper>
              <Copyright>Copyright &nbsp; 2021, TimDim</Copyright>
            </CopyrightWrapper>
          </FlexWrapper>
        </FooterContent>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 50px 0;
`;


const FooterTitle = styled.h3`
  font-weight: 300;
  font-size: 18px;
  color: ${theme.colors.fontColorSecond};
  margin-bottom: 18px;
`;

const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const FooterItem = styled.li`
  font-weight: 300;
  font-size: 18px;
  color: ${theme.colors.fontColorSecond};
`;

const FooterLink = styled.a`
  font-weight: 300;
  font-size: 18px;
  color: ${theme.colors.fontColorSecond};
`;

const FooterBox = styled.div`
  display: flex;
  gap: 32px;
`;

const CopyrightWrapper = styled.div`
  padding-left: 15px;
`;

const Copyright = styled.span`
  font-weight: 300;
  font-size: 18px;
  color: ${theme.colors.fontColorSecond};
  display: inline-block;
`;


const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 773px;
  width: 100%;
  margin: 0 auto;

  ${FooterLink} {
    font-size: 18px;
    font-weight: 300;
    color: ${theme.colors.fontColorSecond};

    &:hover {
      color: ${theme.colors.firstBgBtn}
    }
  }
`;