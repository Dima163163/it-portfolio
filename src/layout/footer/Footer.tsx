import styled from 'styled-components';
import { FlexWrapper } from '../../components/flexWrapper/FlexWrapper';
import { Menu } from '../../components/menu/Menu';
import { Logo } from '../../components/logo/Logo';
import { BtnEllipse } from '../../components/btnEllipse/BtnEllipse';
import { Icon } from '../../components/icon/Icon';

const items = ['Home', 'About me', 'Portfolio', 'Contact'];

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper>
        <Menu menuItems={items} direction='column' gap={'18px'} />
      </FlexWrapper>
      <FlexWrapper $direction={'column'}>
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
      <FlexWrapper $direction={'column'}>
        <FooterBox>
          <Logo />
          <BtnEllipse as={'a'} href='#top'>
            <Icon
              width='35'
              height='35'
              viewBox='0 0 35 35'
              iconId='arrowTop'
            />
          </BtnEllipse>
        </FooterBox>
        <FooterCopyright>Copyright &nbsp; 2021, Notitanic</FooterCopyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #1f1f1f;
  display: flex;
`;

const FooterTitle = styled.h4`
  font-weight: 300;
  font-size: 18px;
  color: #e4e4e4;
`;

const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const FooterItem = styled.li`
  font-weight: 300;
  font-size: 18px;
  color: #e4e4e4;
`;

const FooterLink = styled.a`
  font-weight: 300;
  font-size: 18px;
  color: #e4e4e4;
`;

const FooterBox = styled.div`
  display: flex;
  gap: 32px;
`;

const FooterCopyright = styled.span`
  font-weight: 300;
  font-size: 18px;
  color: #e4e4e4;
`;
