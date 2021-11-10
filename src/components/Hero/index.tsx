import { useRouter } from 'next/router';
import React from 'react';
import { useRive, useStateMachineInput } from 'rive-react';
import useSound from 'use-sound';
import { HeroContainer, HeroContent } from './styles';

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
          <p>
            <span>
              Front-end Developer {content[locale][1]} UX Motion Designer
            </span>
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
