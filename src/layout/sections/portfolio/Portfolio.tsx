import styled from 'styled-components';
import { Slider } from '../../../components/Slider/Slider';
import { SectionTitle } from '../../../components/sectionTilte/SectionTitle';
import { Container } from '../../../components/container/Container';

export const Portfolio = () => {
  return (
    <StyledPortfolio>
      <Container>
        <SectionTitle>Portfolio</SectionTitle>
        <Slider/>
      </Container>
    </StyledPortfolio>
  )
};

const StyledPortfolio = styled.section`
  background: #1d1d1d;
  text-align: center;
  padding: 94px 0 100px;
`
