import styled from 'styled-components'
import { SectionTitle } from '../../components/sectionTilte/SectionTitle'
import { Button } from '../../components/button/Button'

export const Contacts = () => {
  return (
    <StyledContacts>
      <SectionTitle>Contact</SectionTitle>
      <StyledForm>
        <Field placeholder={"name"} name={"name"}/>
        <Field placeholder={"subject"} name={"subject"} />
        <Field as={"textarea"} placeholder={"message"} name={"message"}/>
        <Button type="submit">Send message</Button>
      </StyledForm>
    </StyledContacts>
  )
}


const StyledContacts = styled.section`
  background: linear-gradient(135deg, #414141 0%, #2d2d2d 100%);
`

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Field= styled.input``;
