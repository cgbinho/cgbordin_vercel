import React from 'react';
import { useRouter } from 'next/router';
import {
  WelcomeCardContainer,
  WelcomeCardFooter,
  HorizontalLine,
} from './styles';
import Image from 'next/image';

export function WelcomeCard() {
  const router = useRouter();

  const { locale } = router;

  const title =
    locale !== 'en'
      ? `Olá, eu sou o \n
      Cleber Galves Bordin.`
      : `Hi, I'm \n Cleber Galves Bordin.`;

  const excerpt =
    locale !== 'en'
      ? `Minha paixão e trabalho se dividem entre criatividade e lógica: Código & Design`
      : `My passion and work lives between creativity and logic: Code & Design.`;

  return (
    <WelcomeCardContainer>
      <Image
        src="/images/cgbordin_avatar.svg"
        alt="Cleber Galves Bordin"
        width="200px"
        height="200px"
      />
      <h1>{title}</h1>
      <p>{excerpt}</p>
      <HorizontalLine />
      <WelcomeCardFooter>
        <a href="http://github.com/cgbinho" target="_blank" rel="noreferrer">
          <Image
            src="/images/cgbordin_github.svg"
            alt="Picture of the author"
            width="24px"
            height="24px"
          />
          <span>github.com/cgbinho</span>
        </a>
        <a href="mailto:cgbordin@gmail.com" target="_blank" rel="noreferrer">
          <Image
            src="/images/cgbordin_email.svg"
            alt="Picture of the author"
            width="24px"
            height="24px"
          />
          <span>cgbordin@gmail.com</span>
        </a>
      </WelcomeCardFooter>
    </WelcomeCardContainer>
  );
}
