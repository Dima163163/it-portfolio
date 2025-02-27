import styled from 'styled-components'
import { SectionTitle } from '../../components/sectionTilte/SectionTitle'
import { Button } from '../../components/button/Button'
import { Container } from '../../components/container/Container'

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
          <SectionTitle>Contact</SectionTitle>
          <StyledForm>
            <Field placeholder={"name"} name={"name"}/>
            <Field placeholder={"subject"} name={"subject"} />
            <Field as={"textarea"} placeholder={"message"} name={"message"}/>
            <Button type="submit">Send message</Button>
          </StyledForm>
      </Container>
    </StyledContacts>
  )
}


const StyledContacts = styled.section`
  background: linear-gradient(135deg, #414141 0%, #2d2d2d 100%);
  text-align: center;
  padding: 100px 0;
`

const StyledForm = styled.form`
  margin: 0 auto;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  button {
    width: 300px;
  }

  textarea {
    margin-bottom: 50px;
  }
`;

const Field= styled.input`
  outline: 0;
  appearance: none;
  border: 2px solid #2d2d2d;
  height: 60px;
  border-radius: 14px;
  padding: 15px;
  background-color: #1d1d1d;
  color: #fff;
  resize: none;
  font-size: 20px;
  max-width: 500px;
  width: 100%;


  &::placeholder {
      color: #fff;
  }
`;
