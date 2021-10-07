import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { Container, BurguerContainer, SignedContainer } from './styles';
import Logo from '../Logos';
import Button from '../Form/Button';
import HamburgerButton from './HamburguerButton';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { HamburguerMenu } from './HamburguerMenu';
import { useRouter } from 'next/router';
import { GoSignOut } from 'react-icons/go';
import { DropdownUserMenu } from '../Form/DropdownUserMenu';
import { useSession, signIn } from 'next-auth/client';

const NavBar = () => {
  const [session] = useSession();

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

  const close = () => setOpenBurguer(false);

  const handleSignIn = async () => {
    await signIn('google');
  };

  return (
    <Container>
      <Logo />
      <nav>
        <ul className="navbar_desktop">
          <li>
            <Link href="/">
              <a>{content.home}</a>
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
          {/* {!session?.user ? (
            <>
              <li>
                <Button
                  primary
                  width="100%"
                  height="40px"
                  padding="0.5rem 2rem"
                  onClick={handleSignIn}
                >
                  {content.sign_in}
                </Button>
              </li>
            </>
          ) : (
            <SignedContainer>
              <div className="vertical_line" />
              <li>
                <DropdownUserMenu {...{ content }} />
              </li>
            </SignedContainer>
          )} */}
        </ul>
      </nav>
      <BurguerContainer>
        <HamburgerButton {...{ openBurguer, setOpenBurguer }} />
        <HamburguerMenu {...{ content }} />
      </BurguerContainer>
    </Container>
  );
};

export default NavBar;
