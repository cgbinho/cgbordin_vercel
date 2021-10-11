import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import HamburgerButton from '../HamburguerButton';
import { StyledButton, StyledLink, StyledMenu } from './styles';
import { useRouter } from 'next/router';

export function HamburguerMenu({ content }) {
  const router = useRouter();

  const [openBurguer, setOpenBurguer] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside(node, () => setOpenBurguer(false));

  const close = () => setOpenBurguer(false);

  const MenuItem = ({ label, path }) => {
    return (
      <Link href={path} passHref>
        <StyledLink onClick={close}>{label}</StyledLink>
      </Link>
    );
  };

  return (
    <div ref={node}>
      <StyledMenu open={openBurguer}>
        <MenuItem {...{ label: `${content.home}`, path: '/#home' }} />
        <MenuItem
          {...{ label: `${content.experience}`, path: '/#experience' }}
        />
        <MenuItem {...{ label: `${content.projects}`, path: '/#projects' }} />
        <MenuItem {...{ label: `${content.articles}`, path: '/articles' }} />
        <MenuItem {...{ label: `${content.about}`, path: '/#about' }} />
      </StyledMenu>
      <HamburgerButton {...{ openBurguer, setOpenBurguer }} />
    </div>
  );
}
