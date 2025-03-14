import styled from 'styled-components';
import { theme } from '../../../styles/Theme';
import { Button } from '../../../components/button/Button';

const Contacts = styled.section`
  position: relative;
  text-align: center;
  padding: 100px 0;
  background-image: linear-gradient(to bottom, ${theme.colors.secondaryBg} 0%, ${theme.colors.primaryBg} 70%);

  @media ${theme.media.mobile} {
    padding: 45px 0;
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
  transition: ${theme.animation.transition};

  &::placeholder {
    color: ${theme.colors.fontColorSecond};
  }

  &:focus-visible {
    border: 1px solid ${theme.colors.borderInput};
  }
`;

const Form = styled.form`
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
    height: 120px;
  }
`;

export const S = {
  Contacts,
  Form,
  Field
};
