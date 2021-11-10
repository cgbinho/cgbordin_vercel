import React from 'react';
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuHeader,
  MenuItem,
  SubMenu,
} from '@szhsin/react-menu';
// import { HiChevronDown } from 'react-icons/hi';
import { FaChevronDown } from 'react-icons/fa';
import { DropdownContainer } from './styles';

import { useRouter } from 'next/router';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/theme-dark.css';

import Image from 'next/image';

export function DropdownLanguageMenu() {
  const router = useRouter();

  const { locale } = router;
  const imageName = `flag_${locale}.svg`.toLowerCase();

  return (
    <DropdownContainer>
      <Menu
        menuClassName="dropdown_menu"
        menuButton={
          <MenuButton className="dropdown_button">
            <Image
              src={`/images/${imageName}`}
              alt="Language flag"
              width="24px"
              height="24px"
              objectFit="cover"
              className="border_radius_50"
            />
            <FaChevronDown />
          </MenuButton>
        }
        transition
        theming="dark"
      >
        <MenuItem
          onClick={() => router.push('./', './', { locale: 'pt-BR' })}
          value="pt-BR"
          className="dropdown_menu_item"
          data-cy="language_pt-Br"
        >
          <Image
            src="/images/flag_pt-br.svg"
            alt="Language flag"
            width="24px"
            height="24px"
            objectFit="cover"
            className="border_radius_50"
          />
          pt-Br
        </MenuItem>
        <MenuDivider />
        <MenuItem
          onClick={() => router.push('./', './', { locale: 'en' })}
          value="en"
          className="dropdown_menu_item"
          data-cy="language_en-Us"
        >
          <Image
            src="/images/flag_en.svg"
            alt="Language flag"
            width="24px"
            height="24px"
            objectFit="cover"
            className="border_radius_50"
          />
          en-Us
        </MenuItem>
      </Menu>
    </DropdownContainer>
  );
}
