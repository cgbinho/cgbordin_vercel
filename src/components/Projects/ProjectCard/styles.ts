import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ProjectCardContent = styled(motion.li)`
  display: grid;
  grid-auto-rows: max-content;
  align-items: flex-start;
  justify-items: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  gap: 2rem;
  padding: 2rem;
  /* background-color: var(--gray-170); */
  background-color: hsl(190, 50%, 100%, 0.5);
  backdrop-filter: blur(20px);
  border-radius: 4px;

  .tag {
    padding: 0.1rem 0.8rem;
    background: white;
    border-radius: 4px;
    margin-right: 0.3rem;
  }
`;
