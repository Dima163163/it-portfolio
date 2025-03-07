import React from 'react';
import { Icon } from '../icon/Icon';
import { S } from './Logo_Styles';

export const Logo: React.FC = () => {
  return (
    <S.Logo href='/'>
      <S.IconWrapper>
        <Icon iconId={'logoSvg'} viewBox='0 0 65 48' />
      </S.IconWrapper>
      TimDim
    </S.Logo>
  );
};
