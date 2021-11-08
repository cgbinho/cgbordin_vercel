import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  WelcomeCardContainer,
  WelcomeCardFooter,
  HorizontalLine,
  WelcomeCardContent,
} from './styles';
import Image from 'next/image';
import { useLottie, Lottie, Renderer, EventListener } from 'react-lottie-hook';
import animationData from '../../../public/cgbordin_avatar_data_v01.json';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const welcomeVariants = {
  hidden: {
    translateY: '40%',
    translateZ: '0px',
    opacity: 0,
  },
  visible: {
    translateY: '0%',
    translateZ: '0px',
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delay: 0.4,
    },
  },
};

const welcomeItemVariants = {
  hidden: {
    translateY: '40%',
    translateZ: '0px',
    opacity: 0,
  },
  visible: {
    translateY: '0%',
    translateZ: '0px',
    opacity: 1,
  },
};

const welcomeFooterVariants = {
  hidden: {
    translateY: '-80%',
    translateZ: '0px',
    opacity: 0,
  },
  visible: {
    translateY: '0%',
    translateZ: '0px',
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: 'easeInOut',
      duration: 0.5,
    },
  },
};

const welcomeLottieVariants = {
  hidden: {
    scale: 0.5,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.6,
      delay: 0.2,
    },
  },
};
export function WelcomeCard() {
  const router = useRouter();

  const [refWelcome, inViewWelcome] = useInView();

  const { locale } = router;

  const title =
    locale !== 'en'
      ? `Olá, eu sou o \n
      Cleber Galves Bordin.`
      : `Hi, I'm \n Cleber Galves Bordin.`;

  const excerpt01 =
    locale !== 'en'
      ? `Minha paixão e trabalho se completam com criatividade e lógica:`
      : `My passion and work are the union of creativity and logic:`;

  const excerpt02 =
    locale !== 'en'
      ? `Front-end & UX Motion Design.`
      : `Front-end & UX Motion Design.`;

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
      <motion.section
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'tween' }}
        initial="hidden"
        animate={inViewWelcome ? 'visible' : 'hidden'}
        variants={welcomeLottieVariants}
      >
        <Lottie lottieRef={lottieRef} width={250} height={250} />
      </motion.section>
      <WelcomeCardContent
        initial="hidden"
        ref={refWelcome}
        animate={inViewWelcome ? 'visible' : 'hidden'}
        variants={welcomeVariants}
      >
        <motion.h1 variants={welcomeItemVariants}>{title}</motion.h1>
        <motion.h2 variants={welcomeItemVariants}>{excerpt01}</motion.h2>
        <motion.h2 variants={welcomeItemVariants}>{excerpt02}</motion.h2>
      </WelcomeCardContent>
      <HorizontalLine
        initial="hidden"
        ref={refWelcome}
        animate={inViewWelcome ? 'visible' : 'hidden'}
        variants={welcomeVariants}
      />
      <WelcomeCardFooter
        initial="hidden"
        ref={refWelcome}
        animate={inViewWelcome ? 'visible' : 'hidden'}
        variants={welcomeFooterVariants}
      >
        <motion.a
          href="http://github.com/cgbinho"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/images/cgbordin_github.svg"
            alt="Cleber Galves Bordin GitHub"
            width="24px"
            height="24px"
          />
          <span>github.com/cgbinho</span>
        </motion.a>
        <motion.a
          href="mailto:cgbordin@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/images/cgbordin_email.svg"
            alt="Cleber Galves Bordin email"
            width="24px"
            height="24px"
          />
          <span>cgbordin @gmail.com</span>
        </motion.a>
      </WelcomeCardFooter>
    </WelcomeCardContainer>
  );
}
