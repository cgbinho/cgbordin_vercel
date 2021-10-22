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

import Image from 'next/image';

export function DropdownUserMenu() {
  const router = useRouter();

  const { locale } = router;
  const imageName = `flag_${locale}.svg`.toLowerCase();

  const contentLanguage = {
    en: {
      title: 'Language',
      language01: 'pt-Br',
      language02: 'en-Us',
    },
    'pt-BR': {
      title: 'Linguagem',
      language01: 'pt-Br',
      language02: 'en-Us',
    },
  };

  const content = contentLanguage[locale];

  return (
    <DropdownContainer>
      <Menu
        className="rc-menu-container--theme-dark"
        menuButton={
          <a className="dropdown_button">
            <Image
              src={`/images/${imageName}`}
              alt="Language flag"
              width="24px"
              height="24px"
              objectFit="cover"
              className="border_radius_50"
            />
            <HiChevronDown />
          </a>
        }
        transition
        theming="dark"
      >
        <MenuItem
          onClick={() => router.push('./', './', { locale: 'pt-BR' })}
          value="pt-BR"
          className="menu_item"
        >
          <Image
            src="/images/flag_pt-br.svg"
            alt="Language flag"
            width="24px"
            height="24px"
            objectFit="cover"
            className="border_radius_50"
          />
          {content.language01}
        </MenuItem>
        <MenuDivider />
        <MenuItem
          onClick={() => router.push('./', './', { locale: 'en' })}
          value="en"
        >
          <Image
            src="/images/flag_en.svg"
            alt="Language flag"
            width="24px"
            height="24px"
            objectFit="cover"
            className="border_radius_50"
          />
          {content.language02}
        </MenuItem>
      </Menu>
    </DropdownContainer>
  );
}
