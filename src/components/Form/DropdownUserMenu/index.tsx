import React from 'react';
import {
  Menu,
  MenuItem,
  MenuButton,
  SubMenu,
  MenuDivider,
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/theme-dark.css';
import { DropdownContainer } from './styles';
import Button from '../Button';
import { useRouter } from 'next/router';
import { HiChevronDown } from 'react-icons/hi';
import { signOut, useSession } from 'next-auth/client';

export function DropdownUserMenu({ content }) {
  const [session] = useSession();
  const router = useRouter();

  const handleOrderPage = () => {
    router.push('/orders');
  };

  return (
    <DropdownContainer>
      <Menu
        menuButton={
          <a className="dropdown_button">
            <p>{session.user.email}</p>
            <HiChevronDown />
          </a>
        }
        theming="dark"
      >
        <MenuItem onClick={handleOrderPage} value="orders">
          {content.orders}
        </MenuItem>
        <MenuDivider />
        <MenuItem onClick={() => signOut()} value="SignOut">
          {content.sign_out}
        </MenuItem>
      </Menu>
    </DropdownContainer>
  );
}
