import React, { useEffect, useState } from 'react';
import { BirdAnimation } from '../BirdAnimation';
import Rive, {
  Layout,
  Fit,
  Alignment,
  useRive,
  useStateMachineInput,
} from 'rive-react';
import { HeroContainer, HeroContent } from './styles';
import Button from '../Form/Button';
import { CodeSnippet } from '../CodeSnippet';
import { useRouter } from 'next/router';
import { GiMusicalNotes } from 'react-icons/gi';
import useSound from 'use-sound';

export function Hero() {
  const router = useRouter();
  const { locale } = router;

  const content = {
    en: ['Hi! I am', 'and'],
    'pt-BR': ['Olá! Eu sou o', 'e'],
  };

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
    <HeroContainer className="background_light">
      <HeroContent>
        <section>
          <p>{content[locale][0]}</p>
          <h1>Cleber Galves Bordin</h1>
          <p className="text_underline">
            <span>Front-end Developer</span> {content[locale][1]}{' '}
            <span>UX Motion Designer</span>
          </p>
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
