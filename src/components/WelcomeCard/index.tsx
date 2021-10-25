import React from 'react';
import { useRouter } from 'next/router';
import {
  WelcomeCardContainer,
  WelcomeCardFooter,
  HorizontalLine,
} from './styles';
import Image from 'next/image';
import { useLottie, Lottie, Renderer, EventListener } from 'react-lottie-hook';
import animationData from '../../../public/cgbordin_avatar_data_v01.json';

export function WelcomeCard() {
  const router = useRouter();

  const { locale } = router;

  const title =
    locale !== 'en'
      ? `Olá, eu sou o \n
      Cleber Galves Bordin.`
      : `Hi, I'm \n Cleber Galves Bordin.`;

  const excerpt01 =
    locale !== 'en'
      ? `Minha paixão e trabalho se dividem entre criatividade e lógica:`
      : `My passion and work lives between creativity and logic:`;

  const excerpt02 =
    locale !== 'en' ? `Código & Motion Design` : `Code & Motion Design.`;

  const [lottieRef, { isPaused, isStopped }, controls] = useLottie({
    renderer: Renderer.svg,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      progressiveLoad: true,
    },
    animationData,
  });

  return (
    <WelcomeCardContainer>
      <Lottie lottieRef={lottieRef} width={250} height={250} />
      <h1>{title}</h1>
      <h2>{excerpt01}</h2>
      <h2>{excerpt02}</h2>
      <HorizontalLine />
      <WelcomeCardFooter>
        <a href="http://github.com/cgbinho" target="_blank" rel="noreferrer">
          <Image
            src="/images/cgbordin_github.svg"
            alt="Cleber Galves Bordin GitHub"
            width="24px"
            height="24px"
          />
          <span>github.com/cgbinho</span>
        </a>
        <a href="mailto:cgbordin@gmail.com" target="_blank" rel="noreferrer">
          <Image
            src="/images/cgbordin_email.svg"
            alt="Cleber Galves Bordin email"
            width="24px"
            height="24px"
          />
          <span>cgbordin@gmail.com</span>
        </a>
      </WelcomeCardFooter>
    </WelcomeCardContainer>
  );
}
