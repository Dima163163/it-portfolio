import React from 'react';
import { Menu } from '../../../../components/menu/Menu';
import { S } from '../HeaderMenu_Styles';

type MobileMenuPropsType = {
  menuItems: Array<string>;
  isOpen: boolean;
  openMenu?: () => void;
};

export const MobileMenu: React.FC<MobileMenuPropsType> = (
  props: MobileMenuPropsType
) => {
  return (
    <S.MobileMenu>
      <S.BurgerButton
        $isOpen={props.isOpen}
        onClick={props.openMenu}
        aria-haspopup={!props.isOpen}
        aria-label={props.isOpen ? 'Закрыть окно' : 'Открыть окно'}
      >
        <span></span>
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopup $isOpen={props.isOpen}>
        <Menu menuItems={props.menuItems} direction={'column'} openMenu={props.openMenu}/>
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};
