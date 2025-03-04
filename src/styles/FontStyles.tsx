import { createGlobalStyle } from 'styled-components';

import ArodoraProEot from '../assets/fonts/ArodoraPro-light-300.eot';
import ArodoraProWoff from '../assets/fonts/ArodoraPro-light-300.woff';
import ArodoraProWoff2 from '../assets/fonts/ArodoraPro-light-300.woff2';

import NEXTARTRegularEot from '../assets/fonts/NEXTART-regular-400.eot';
import NEXTARTRegularWoff from '../assets/fonts/NEXTART-regular-400.woff';
import NEXTARTRegularWoff2 from '../assets/fonts/NEXTART-regular-400.woff2';

import NEXTARTSemiBoldEot from '../assets/fonts/NEXTART-semiBold-600.eot';
import NEXTARTSemiBoldWoff from '../assets/fonts/NEXTART-semiBold-600.woff';
import NEXTARTSemiBoldWoff2 from '../assets/fonts/NEXTART-semiBold-600.woff2';

import NEXTARTBoldEot from '../assets/fonts/NEXTART-bold-700.eot';
import NEXTARTBoldWoff from '../assets/fonts/NEXTART-bold-700.woff';
import NEXTARTBoldWoff2 from '../assets/fonts/NEXTART-bold-700.woff2';

import NicoMojiEot from '../assets/fonts/NicoMoji.eot';
import NicoMojiWoff from '../assets/fonts/NicoMoji.woff';
import NicoMojiWoff2 from '../assets/fonts/NicoMoji.woff2';

export const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Arodora Pro';
    src: url(${ArodoraProEot}) format('eot'),
        url(${ArodoraProWoff}) format('woff'),
        url(${ArodoraProWoff2}) format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'NEXT ART';
    src: url(${NEXTARTRegularEot}) format('eot'),
        url(${NEXTARTRegularWoff}) format('woff'),
        url(${NEXTARTRegularWoff2}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'NEXT ART';
    src: url(${NEXTARTSemiBoldEot}) format('eot'),
        url(${NEXTARTSemiBoldWoff}) format('woff'),
        url(${NEXTARTSemiBoldWoff2}) format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'NEXT ART';
    src: url(${NEXTARTBoldEot}) format('eot'),
        url(${NEXTARTBoldWoff}) format('woff'),
        url(${NEXTARTBoldWoff2}) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Nico Moji';
    src: url(${NicoMojiEot}) format('eot'),
        url(${NicoMojiWoff}) format('woff'),
        url(${NicoMojiWoff2}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
`;
