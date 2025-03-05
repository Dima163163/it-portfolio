import { theme } from './Theme'

type FontPropsType = {
  family?: string
  weight?: number
  color?: string
  lineHeight?: number
  Fmin?: number
  Fmax?: number
}

export const font = ({family, color, weight, lineHeight, Fmin, Fmax}: FontPropsType) => `
  font-family: ${family || 'Arodora Pro'};
  font-weight: ${weight || 300};
  color: ${color || theme.colors.fontColorFirst};
  line-height: ${lineHeight || 'normal'};
  font-size: calc( (100vw - 375px)/(1920 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px );
`;