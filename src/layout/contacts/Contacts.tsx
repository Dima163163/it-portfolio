import styled from 'styled-components';
import { SectionTitle } from '../../components/sectionTilte/SectionTitle';
import { Button } from '../../components/button/Button';
import { Container } from '../../components/container/Container';
import { theme } from '../../styles/Theme';

export const Contacts = () => {
  return (
    <StyledContacts id={'contact'}>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <StyledForm>
          <Field placeholder={'Name'} name={'name'} />
          <Field placeholder={'Subject'} name={'subject'} />
          <Field placeholder={'Email'} name={'email'} type={'email'} />
          <Field as={'textarea'} placeholder={'Message'} name={'message'} />
          <Button type='submit'>Send message</Button>
        </StyledForm>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  background-image: linear-gradient(135deg, ${theme.colors.secondaryBg} 0%, ${theme.colors.thirdBg} 100%);
  text-align: center;
  padding: 100px 0;
`;


const StyledForm = styled.form`
  margin: 0 auto;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  ${Button} {
    width: 300px;
  }

  textarea {
    resize: none;
    margin-bottom: 50px;
  }
`;

const Field = styled.input`
  outline: 0;
  appearance: none;
  font-family: 'Arodora Pro', sans-serif;
  border: 2px solid ${theme.colors.thirdBg};
  height: 60px;
  border-radius: 14px;
  padding: 15px;
  background-color: ${theme.colors.primaryBg};
  color: ${theme.colors.fontColorSecond};
  font-size: 20px;
  width: 100%;

  &::placeholder {
    color: ${theme.colors.fontColorSecond};
  }

  &:focus-visible {
    border: 1px solid ${theme.colors.borderInput};
  }
`;