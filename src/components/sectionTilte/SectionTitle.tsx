import styled from 'styled-components';

type SectionTitlePropsType = {
  $padding?: string
  $margin?: string
}

export const SectionTitle= styled.h3<SectionTitlePropsType>`
display: inline-block;
  font-family: "NEXT ART", sans-serif;
  font-weight: 400;
  font-size: 48px;
  color: #e4e4e4;
  padding: ${props => props.$padding || '0 0 50px 0'};
  margin: ${props => props.$margin || '0'};
`