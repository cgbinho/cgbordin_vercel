import { Menu, MenuDivider, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/theme-dark.css';
import { useRouter } from 'next/router';
import React from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { DropdownContainer } from './styles';

export function DropdownUserMenu() {
  const router = useRouter();

  return (
    <DropdownContainer>
      <Menu
        menuButton={
          <a className="dropdown_button">
            <p>{router.locale}</p>
            <HiChevronDown />
          </a>
        }
        theming="dark"
      >
        <MenuItem
          onClick={() => router.push('./', './', { locale: 'pt-BR' })}
          value="pt-BR"
        >
          Portuguese (pt-BR)
        </MenuItem>
        <MenuDivider />
        <MenuItem
          onClick={() => router.push('./', './', { locale: 'en' })}
          value="en"
        >
          English (en-Us)
        </MenuItem>
      </Menu>
    </DropdownContainer>
  );
}
