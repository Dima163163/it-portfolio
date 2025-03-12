import React from 'react';
import { Menu } from '../../../../components/menu/Menu';
import { S } from '../HeaderMenu_Styles';

export const DesktopMenu: React.FC = () => {
  return (
    <S.DesktopMenu>
      <Menu direction='row' typeItem='headerItem' />
    </S.DesktopMenu>
  );
};
