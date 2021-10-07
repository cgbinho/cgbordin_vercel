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

  const title = locale !== 'en' ? `Hi, I'm ` : `Olá, eu sou o `;

  const excerpt =
    locale !== 'en'
      ? `Minha paixão e trabalho se dividem entre criatividade e lógica: Código & Design`
      : `My passion and work lives between creativity and logic: Code & Design.`;

  return (
    <WelcomeCardContainer>
      <Image
        src="/images/cgbordin_profile_02.jpg"
        alt="Picture of the author"
        width="180px"
        height="180px"
        className="border_radius_50"
      />
      <h1>Olá, eu sou o Cleber Galves Bordin.</h1>
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
        <a href="mailto:cgbordin@gmail.com">
          <Image
            src="/images/cgbordin_email.svg"
            alt="Picture of the author"
            width="24px"
            height="24px"
          />
          <span>cgbordin @gmail.com</span>
        </a>
      </WelcomeCardFooter>
    </WelcomeCardContainer>
  );
}
