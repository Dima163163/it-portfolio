import React from 'react';
import { S } from './Menu_Styles';

type MenuPropsType = {
  menuItems: string[],
  direction?: string,
  typeItem?: string,
  onBurgerBtnClick?: () => void
}

export const Menu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
  return (
    <S.Menu role='menu' direction={props.direction}>
      {props.menuItems.length > 0 &&
        props.menuItems.map((item, i) => (
          <S.MenuItem role='menuitem' key={i} $typeItem={props.typeItem}>
            <S.Link href={`#${item.toLowerCase()}`}>{item}</S.Link>
          </S.MenuItem>
        ))}
    </S.Menu>
  )
};