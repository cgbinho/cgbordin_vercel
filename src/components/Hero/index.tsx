import React from 'react';
import { BirdAnimation } from '../BirdAnimation';
import Rive, {
  Layout,
  Fit,
  Alignment,
  useRive,
  useStateMachineInput,
} from 'rive-react';
import { HeroContainer } from './styles';
import Button from '../Form/Button';
import { CodeSnippet } from '../CodeSnippet';

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
    <HeroContainer>
      <RiveComponent
        onClick={() => singInput.fire()}
        style={{
          width: '600px',
          height: '300px',
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      />
      <section>
        <p>Hi!, I am</p>
        <h1>Cleber Galves Bordin</h1>
        <p className="text_underline">
          <span>Front-end Developer</span> and <span>UX Motion Designer</span>
        </p>
      </section>
      <section>
        <Button
          primary
          width="100%"
          height="40px"
          padding=".8rem 2rem"
          onClick={() => singInput.fire()}
        >
          Sing!
        </Button>
        <CodeSnippet />
      </section>
    </HeroContainer>
  );
}
