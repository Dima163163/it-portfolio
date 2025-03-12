import React from 'react';
import { Icon } from '../icon/Icon';
import { S } from './Logo_Styles';

export const Logo: React.FC = () => {
  return (
    <S.Logo href='/'>
      <Icon iconId={'logoSvg'} viewBox='0 0 65 48' width={'65'} height={'48'} />
      TimDim
    </S.Logo>
  );
};
