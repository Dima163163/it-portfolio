import styled from 'styled-components';
import { Slider } from '../../../components/Slider/Slider';

export const Portfolio = () => {
  return (
    <StyledPortfolio>
      <PortfolioTitle>Portfolio</PortfolioTitle>
      <Slider/>
    </StyledPortfolio>
  )
};

const StyledPortfolio = styled.section`
  background: #1d1d1d;
`

const PortfolioTitle = styled.h3`
  
`