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

  const excerpt =
    locale !== 'en'
      ? `Minha paixão e trabalho se dividem entre criatividade e lógica: Código & Design`
      : `My passion and work lives between creativity and logic: Code & Design.`;

  const [lottieRef, { isPaused, isStopped }, controls] = useLottie({
    renderer: Renderer.svg,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      progressiveLoad: false,
    },
    animationData,
  });

  return (
    <WelcomeCardContainer>
      <Lottie lottieRef={lottieRef} width={250} height={250} />
      <h1>{title}</h1>
      <p>{excerpt}</p>
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
