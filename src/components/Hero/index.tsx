import React from 'react';
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

import { GiMusicalNotes } from 'react-icons/gi';

export function Hero() {
  const { rive, RiveComponent } = useRive({
    src: '/animations/bird.riv',
    stateMachines: 'bird_state_machine',
    autoplay: true,
    onStateChange: (event) => {
      console.log(event.data[0]);
    },
  });

  const data = { idle: true, singing: false };

  const singInput = useStateMachineInput(rive, 'bird_state_machine', 'sing');

  return (
    <HeroContainer className="background_light">
      <HeroContent>
        <section>
          <p>Hi! I am</p>
          <h1>Cleber Galves Bordin</h1>
          <p className="text_underline">
            <span>Front-end Developer</span> and <span>UX Motion Designer</span>
          </p>
        </section>
        <section className="rive">
          <RiveComponent
            onClick={() => singInput.fire()}
            style={{
              // position: 'absolute',
              height: '400px',
              zIndex: 0,
            }}
          />
          <Button
            primary
            width="100%"
            height="40px"
            padding=".8rem 2rem"
            onClick={() => singInput.fire()}
          >
            <GiMusicalNotes size={24} />
          </Button>
          {/* <CodeSnippet /> */}
        </section>
        {/* <img src="/images/hero_bg.svg" alt="Florest background" /> */}
      </HeroContent>
    </HeroContainer>
  );
}
