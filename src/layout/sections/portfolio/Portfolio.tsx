import styled from 'styled-components';
import { Slider } from '../../../components/Slider/Slider';
import { SectionTitle } from '../../../components/sectionTilte/SectionTitle';
import { Container } from '../../../components/container/Container';
import { theme } from '../../../styles/Theme';

export const Portfolio = () => {
  return (
    <StyledPortfolio id={'portfolio'}>
      <Container>
        <SectionTitle>Portfolio</SectionTitle>
        <Slider />
      </Container>
    </StyledPortfolio>
  );
};

const StyledPortfolio = styled.section`
  background: ${theme.colors.primaryBg};
  text-align: center;
  padding: 94px 0 100px;
`;
