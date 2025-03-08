import { FlexWrapper } from '../../components/flexWrapper/FlexWrapper';
import { Logo } from '../../components/logo/Logo';
import { Icon } from '../../components/icon/Icon';
import { Container } from '../../components/container/Container';
import { Menu } from '../../components/menu/Menu';
import { S } from './Footer_Styles';
import React from 'react';
import { BtnEllipse } from '../../components/btnEllipse/BtnEllipse';

const items = ['Home', 'About me', 'Portfolio', 'Contact'];

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <S.FooterContent>
          <Menu menuItems={items} direction={'column'} />
          <FlexWrapper $direction='column'>
            <S.FooterTitle>Contact:</S.FooterTitle>
            <S.FooterList>
              <S.FooterItem>
                Inst: <S.FooterLink href='#'>timdim</S.FooterLink>
              </S.FooterItem>
              <S.FooterItem>
                Email:{' '}
                <S.FooterLink href='mailto:Email: notitanic33@gmail.com'>
                  timdim@gmail.com
                </S.FooterLink>
              </S.FooterItem>
              <S.FooterItem>
                Calls:{' '}
                <S.FooterLink href='tel:+78467777777'>
                  +7 (846) - 777 - 77 - 77
                </S.FooterLink>
              </S.FooterItem>
            </S.FooterList>
          </FlexWrapper>
          <FlexWrapper $direction={'column'} $justify={'space-between'}>
            <S.FooterBox>
              <Logo />
              <BtnEllipse as={'a'} href='#home' aria-label={'button top site'}>
                <Icon
                  viewBox='0 0 36 36'
                  iconId='arrowTop'
                />
              </BtnEllipse>
            </S.FooterBox>
            <S.CopyrightWrapper>
              <S.Copyright>Copyright &nbsp; 2021, TimDim</S.Copyright>
            </S.CopyrightWrapper>
          </FlexWrapper>
        </S.FooterContent>
      </Container>
    </S.Footer>
  );
};