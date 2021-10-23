import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { DropdownUserMenu } from '../Form/DropdownUserMenu';
import Logo from '../Logos';
import HamburgerButton from './HamburguerButton';
import { HamburguerMenu } from './HamburguerMenu';
import { BurguerContainer, Container } from './styles';

const NavBar = () => {
  const router = useRouter();

  const { locale } = router;

  const contentNavbar = {
    en: {
      home: 'Home',
      articles: 'Articles',
      projects: 'Projects',
      experience: 'Experience',
      aepzera: 'Aepzera',
      about: 'About',
      sign_in: 'Sign In',
      sign_up: 'Sign Up',
      orders: 'Orders',
      sign_out: 'Sign Out',
    },
    'pt-BR': {
      home: 'Início',
      articles: 'Artigos',
      experience: 'Experiência',
      projects: 'Projetos',
      aepzera: 'Aepzera',
      about: 'Sobre',
      sign_in: 'Entrar',
      sign_up: 'Cadastrar',
      orders: 'Pedidos',
      sign_out: 'Sair',
    },
  };

  const content = contentNavbar[locale];

  const [openBurguer, setOpenBurguer] = useState<boolean>(false);

  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside(node, () => setOpenBurguer(false));

  return (
    <Container>
      <Logo />
      <nav>
        <ul className="navbar_desktop">
          <li>
            <Link href="/#home">
              <a data-cy="nav-home">{content.home}</a>
            </Link>
          </li>
          <li>
            <Link href="/#experience">
              <a>{content.experience}</a>
            </Link>
          </li>
          <li>
            <Link href="/articles">
              <a>{content.articles}</a>
            </Link>
          </li>
          <li>
            <Link href="/#projects">
              <a>{content.projects}</a>
            </Link>
          </li>
          <li>
            <Link href="/#about">
              <a>{content.about}</a>
            </Link>
          </li>
          <div className="vertical_line" />
          <li>
            <DropdownUserMenu />
          </li>
        </ul>
      </nav>
      <BurguerContainer>
        <DropdownUserMenu />
        <HamburgerButton {...{ openBurguer, setOpenBurguer }} />
        <HamburguerMenu {...{ content }} />
      </BurguerContainer>
    </Container>
  );
};

export default NavBar;
