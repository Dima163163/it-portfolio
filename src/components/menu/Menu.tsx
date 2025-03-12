import React, { useContext } from 'react';
import { S } from './Menu_Styles';
import { MenuContext } from '../../App';

type MenuPropsType = {
  direction?: string,
  typeItem?: string,
  onBurgerBtnClick?: () => void
}

const menuItems = [
  {
    title: 'Home',
    href: 'home'
  },
  {
    title: 'Skills',
    href: 'skills'
  },
  {
    title: 'About me',
    href: 'about me'
  },
  {
    title: 'Portfolio',
    href: 'portfolio'
  },
  {
    title: 'Contact',
    href: 'contact'
  },
];

export const Menu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
  const {activeItem, changeItemMenu} = useContext(MenuContext);

  return (
    <S.Menu role='menu' direction={props.direction}>
      {menuItems.length > 0 &&
        menuItems.map((item, i) => (
          <S.MenuItem role='menuitem' key={i} $typeItem={props.typeItem} $activeStatus={activeItem === item.title} onClick={() => changeItemMenu(item.title)}>
            <S.NavLink href={`#${item.href.toLowerCase()}`}>{item.title}</S.NavLink>
          </S.MenuItem>
        ))}
    </S.Menu>
  )
};