import Rive, {
  Layout,
  Fit,
  Alignment,
  useRive,
  useStateMachineInput,
} from 'rive-react';

export const BirdAnimation = () => {
  const { rive, RiveComponent } = useRive({
    src: '/animations/bird.riv',
    stateMachines: 'bird_state_machine',
    autoplay: true,
  });

  const grooveInput = useStateMachineInput(rive, 'bird_state_machine', 'sing');

  return (
    <RiveComponent
      onClick={() => grooveInput.fire()}
      style={{ maxWidth: '800px', maxHeight: '500px' }}
    />
  );
};
