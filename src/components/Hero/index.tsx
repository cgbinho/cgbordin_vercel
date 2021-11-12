import { useRouter } from 'next/router';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { IoLogoLinkedin } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { useInView } from 'react-intersection-observer';
import { useRive, useStateMachineInput } from 'rive-react';
import useSound from 'use-sound';
import Button from '../Form/Button';
import { HeroContainer, HeroContent } from './styles';

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

export function Hero() {
  const router = useRouter();

  const { locale } = router;

  const content = {
    en: ['Hi, I am', 'and'],
    'pt-BR': ['Olá! Sou o', 'e'],
  };

  const [refWelcome, inViewWelcome] = useInView();

  const { rive, RiveComponent } = useRive({
    src: '/animations/bird.riv',
    stateMachines: 'bird_state_machine',
    autoplay: true,
  });

  const singInput = useStateMachineInput(rive, 'bird_state_machine', 'sing');

  const [play] = useSound('/audios/bird_sing.mp3');

  const handleSing = () => {
    singInput.fire();
    play();
  };

  return (
    <HeroContainer>
      <HeroContent>
        <section className="hero_text">
          <p>
            {content[locale][0]} <strong>Cleber Bordin</strong>!
          </p>
          <h1>Front-end Developer {content[locale][1]} UX Motion Designer.</h1>
          <div className="social_networks svg_anchor_dark dark_focus">
            <a
              href="https://github.com/cgbinho"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub size={28} color={'var(--icon-primary)'} />
            </a>
            <a
              href="https://www.linkedin.com/in/cleberbordin/"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoLinkedin size={30} color={'var(--icon-primary)'} />
            </a>
            <a
              href="mailto:cgbordin@gmail.com?subject=Hello from a cgbordin.com visitor!"
              target="_blank"
              rel="noreferrer"
            >
              <MdEmail size={30} color={'var(--icon-primary)'} />
            </a>
          </div>
        </section>
        <section className="rive">
          <RiveComponent
            onClick={handleSing}
            style={{
              height: '400px',
              zIndex: 0,
            }}
          />
        </section>
      </HeroContent>
    </HeroContainer>
  );
}
