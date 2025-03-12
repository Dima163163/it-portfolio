import styled from 'styled-components';
import { theme } from '../../styles/Theme';

const Logo = styled.a`
  display: flex;
  gap: 10px;
  align-items: center;
  color: ${theme.colors.fontColorSecond};
  font-family: 'Nico Moji', sans-serif;
  font-weight: 400;
  font-size: 18px;
`;

export const S = {
  Logo
}