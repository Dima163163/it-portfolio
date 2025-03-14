import React, { useState } from 'react';
import { Menu } from '../../../../components/menu/Menu';
import { S } from '../HeaderMenu_Styles';


export const MobileMenu: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const onBurgerBtnClick = () => {
    if (!menuIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <S.MobileMenu>
      <S.BurgerButton
        $isOpen={menuIsOpen}
        onClick={onBurgerBtnClick}
        aria-haspopup={!menuIsOpen}
        aria-label={menuIsOpen ? 'Закрыть окно' : 'Открыть окно'}
      >
        <span></span>
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopup $isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <Menu direction={'column'} onBurgerBtnClick={onBurgerBtnClick}/>
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};
