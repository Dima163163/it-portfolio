import { SectionTitle } from '../../components/sectionTilte/SectionTitle';
import { Button } from '../../components/button/Button';
import { Container } from '../../components/container/Container';
import { S } from './Contacts_Styles';
import React from 'react';

export const Contacts: React.FC = () => {
  return (
    <S.Contacts id={'contact'}>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <S.Form>
          <S.Field placeholder={'Name'} name={'name'} />
          <S.Field placeholder={'Subject'} name={'subject'} />
          <S.Field placeholder={'Email'} name={'email'} type={'email'} />
          <S.Field as={'textarea'} placeholder={'Message'} name={'message'} />
          <Button type='submit'>Send message</Button>
        </S.Form>
      </Container>
    </S.Contacts>
  );
};
