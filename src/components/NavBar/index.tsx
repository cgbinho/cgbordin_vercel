import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { DropdownLanguageMenu } from '../Form/DropdownLanguageMenu';
import Logo from '../Logos';
import { BurguerMenu } from './BurguerMenu';
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

  return (
    <Container>
      <a className="skip_main" href="#home" tabIndex={0}>
        Skip to main content
      </a>
      <Logo />

      <nav data-cy="nav-home">
        <ul className="navbar">
          <li className="navbar_desktop">
            <Link href="/#home">
              <a>{content.home}</a>
            </Link>
          </li>
          <li className="navbar_desktop">
            <Link href="/#experience">
              <a>{content.experience}</a>
            </Link>
          </li>
          <li className="navbar_desktop">
            <Link href="/articles">
              <a>{content.articles}</a>
            </Link>
          </li>
          <li className="navbar_desktop">
            <Link href="/#projects">
              <a>{content.projects}</a>
            </Link>
          </li>
          <li className="navbar_desktop">
            <Link href="/#about">
              <a>{content.about}</a>
            </Link>
          </li>
          <li>
            <DropdownLanguageMenu />
          </li>
          <BurguerContainer className="navbar_mobile">
            <BurguerMenu content={content} />
          </BurguerContainer>
        </ul>
      </nav>
    </Container>
  );
};

export default NavBar;
