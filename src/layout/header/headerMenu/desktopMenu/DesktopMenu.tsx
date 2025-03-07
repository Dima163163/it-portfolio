import React from 'react';
import { Menu } from '../../../../components/menu/Menu';
import { S } from '../HeaderMenu_Styles';

type HeaderMenuPropsType = {
  menuItems: Array<string>;
};

export const DesktopMenu: React.FC<HeaderMenuPropsType> = (
  props: HeaderMenuPropsType
) => {
  return (
    <S.DesktopMenu>
      <Menu menuItems={props.menuItems} direction='row' typeItem='headerItem' />
    </S.DesktopMenu>
  );
};
