import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const Button = styled.button`
  cursor: pointer;
  height: 47px;
  padding: 10px 38px 12px 41px;
  border-radius: 6px;
  border: 2px solid transparent;
  box-shadow: 0 2px 13px 0 rgba(226, 158, 0, 0.48);
  background: linear-gradient(315deg, ${theme.colors.firstBgBtn} 0%, ${theme.colors.secondBgBtn} 100%);
  text-transform: uppercase;
  font-family: 'NEXT ART', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: ${theme.colors.fontColorThird};

  &:hover {
    background: none;
    border-color: ${theme.colors.firstBgBtn};
    color: ${theme.colors.secondBgBtn};
  }
`;