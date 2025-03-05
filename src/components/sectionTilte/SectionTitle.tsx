import styled from 'styled-components';
import { theme } from '../../styles/Theme';

type SectionTitlePropsType = {
  $padding?: string;
  $margin?: string;
};

export const SectionTitle = styled.h2<SectionTitlePropsType>`
display: inline-block;
  font-family: "NEXT ART", sans-serif;
  font-weight: 400;
  font-size: 48px;
  color: ${theme.colors.fontColorFirst};
  padding: ${(props) => props.$padding || '0 0 50px 0'};
  margin: ${(props) => props.$margin || '0'};
`;
