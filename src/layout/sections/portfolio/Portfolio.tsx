import { Slider } from '../../../components/slider/Slider';
import { SectionTitle } from '../../../components/sectionTilte/SectionTitle';
import { Container } from '../../../components/container/Container';
import { S } from './Portfolio_Styles';
import React from 'react';

export const Portfolio: React.FC = () => {
  return (
    <S.Portfolio id={'portfolio'}>
      <Container>
        <SectionTitle>Portfolio</SectionTitle>
        <Slider />
      </Container>
    </S.Portfolio>
  );
};