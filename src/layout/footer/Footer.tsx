import styled from 'styled-components';
import { FlexWrapper } from '../../components/flexWrapper/FlexWrapper';
import { Menu } from '../../components/menu/Menu';
import { Logo } from '../../components/logo/Logo';
import { BtnEllipse } from '../../components/btnEllipse/BtnEllipse';
import { Icon } from '../../components/icon/Icon';
import { Container } from '../../components/container/Container';

const items = ['Home', 'About me', 'Portfolio', 'Contact'];

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterContent>
          <Menu menuItems={items} direction='column' gap={'18px'} />
          <FlexWrapper $direction='column'>
            <FooterTitle>Contact:</FooterTitle>
            <FooterList>
              <FooterItem>
                Inst:
                <FooterLink href='#'>notitanic33</FooterLink>
              </FooterItem>
              <FooterItem>
                Email:
                <FooterLink href='mailto:Email: notitanic33@gmail.com'>
                  notitanic33@gmail.com
                </FooterLink>
              </FooterItem>
              <FooterItem>
                Calls:
                <FooterLink href='tel:+79001215454'>
                  +7 (900) - 121 - 54 -54
                </FooterLink>
              </FooterItem>
            </FooterList>
          </FlexWrapper>
          <FlexWrapper $direction={'column'} $justify={'space-between'}>
            <FooterBox>
              <Logo />
              <BtnEllipse as={'a'} href='#top'>
                <Icon
                  width='36'
                  height='36'
                  viewBox='0 0 36 36'
                  iconId='arrowTop'
                />
              </BtnEllipse>
            </FooterBox>
            <CopyrightWrapper>
              <Copyright>Copyright &nbsp; 2021, Notitanic</Copyright>
            </CopyrightWrapper>
          </FlexWrapper>
        </FooterContent>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #1f1f1f;
  padding: 50px 0;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 773px;
  width: 100%;
  margin: 0 auto;
  a {
    font-size: 18px;
    font-weight: 300;
    color: #fff;
  }
`;

const FooterTitle = styled.h4`
  font-weight: 300;
  font-size: 18px;
  color: #fff;
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
  color: #fff;
`;

const FooterLink = styled.a`
  font-weight: 300;
  font-size: 18px;
  color: #fff;
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
  color: #fff;
  display: inline-block;
`;
