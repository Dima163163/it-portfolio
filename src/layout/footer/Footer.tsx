import { FlexWrapper } from '../../components/flexWrapper/FlexWrapper';
import { Logo } from '../../components/logo/Logo';
import { Container } from '../../components/container/Container';
import { Menu } from '../../components/menu/Menu';
import { S } from './Footer_Styles';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <S.FooterContent>
          <Menu direction={'column'} />
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
            <Logo />
            <S.CopyrightWrapper>
              <S.Copyright>Copyright &nbsp; 2021, TimDim</S.Copyright>
            </S.CopyrightWrapper>
          </FlexWrapper>
        </S.FooterContent>
      </Container>
    </S.Footer>
  );
};