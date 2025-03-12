import { SectionTitle } from '../../components/sectionTilte/SectionTitle';
import { Button } from '../../components/button/Button';
import { Container } from '../../components/container/Container';
import { S } from './Contacts_Styles';
import React, { ElementRef, useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contacts: React.FC = () => {
  const form = useRef<ElementRef<'form'>>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm('service_cl547zg', 'template_csxbl1u', form.current, {
        publicKey: 'ErfFl1RwmWiHk1TOL',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    e.target.reset();
  };
  return (
    <S.Contacts id={'contact'}>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <S.Form ref={form} onSubmit={sendEmail}>
          <S.Field placeholder={'Name'} name={'user_name'} required />
          <S.Field placeholder={'Subject'} name={'subject'} required />
          <S.Field placeholder={'Email'} name={'user_email'} type={'email'} required />
          <S.Field as={'textarea'} placeholder={'Message'} name={'message'} required />
          <Button type='submit'>Send message</Button>
        </S.Form>
      </Container>
    </S.Contacts>
  );
};
