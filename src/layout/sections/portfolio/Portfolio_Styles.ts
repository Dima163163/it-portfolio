import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

const Portfolio = styled.section`
  position: relative;
  background: ${theme.colors.primaryBg};
  text-align: center;
  padding: 94px 0 100px;

  @media ${theme.media.mobile} {
    padding: 90px 0;
  }
`;

export const S = {
  Portfolio
}