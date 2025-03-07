import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  z-index: 5;
  background-color: ${theme.colors.primaryBg};
  padding: 26px 0;
`;

export const S = {
  Header
}