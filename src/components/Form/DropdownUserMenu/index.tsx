import React from 'react';
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuHeader,
  MenuItem,
  SubMenu,
} from '@szhsin/react-menu';
import { HiChevronDown } from 'react-icons/hi';
import { DropdownContainer } from './styles';

import { useRouter } from 'next/router';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/theme-dark.css';

export function DropdownUserMenu() {
  const router = useRouter();

  const { locale } = router;

  const contentLanguage = {
    en: {
      title: 'Language',
      language01: 'Portuguese (pt-Br)',
      language02: 'English (en-Us)',
    },
    'pt-BR': {
      title: 'Linguagem',
      language01: 'Português (pt-Br)',
      language02: 'Inglês (en-Us)',
    },
  };

  const content = contentLanguage[locale];

  return (
    <DropdownContainer>
      <Menu
        className="rc-menu-container--theme-dark"
        menuButton={
          <a className="dropdown_button">
            <p>{router.locale}</p>
            <HiChevronDown />
          </a>
        }
        theming="dark"
      >
        <MenuHeader>{content.title}</MenuHeader>
        <MenuDivider />
        <MenuItem
          onClick={() => router.push('./', './', { locale: 'pt-BR' })}
          value="pt-BR"
        >
          {content.language01}
        </MenuItem>
        <MenuItem
          onClick={() => router.push('./', './', { locale: 'en' })}
          value="en"
        >
          {content.language02}
        </MenuItem>
      </Menu>
    </DropdownContainer>
  );
}
