import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

const Portfolio = styled.section`
  position: relative;
  text-align: center;
  padding: 94px 0 100px;
  background-image: linear-gradient(to bottom, ${theme.colors.primaryBg} 0%, ${theme.colors.secondaryBg} 100%);

  @media ${theme.media.mobile} {
    padding: 90px 0;
  }
`;

export const S = {
  Portfolio
};
