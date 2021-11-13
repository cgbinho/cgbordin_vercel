import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ProjectCardContent = styled(motion.li)`
  display: grid;
  grid-auto-rows: max-content;
  align-items: flex-start;
  align-content: space-between;
  justify-items: flex-start;
  width: 100%;
  height: 100%;
  gap: 1rem;
  border-radius:0.3rem;
  padding-bottom: 1rem;
  /* background-color: hsl(200, 19%, 95%); */
  background-color: hsl(100, 100%, 100%);
  /* backdrop-filter: blur(20px); */

  img {
    border-radius:0.3rem0.3rem 0 0;
  }

  h3 {
    margin-top: 0.5rem;
  }

  .project_info {
    padding-inline: 1.5rem;
  }

  .project_button_group {
    display: grid;
    grid-auto-flow: column;
    width: 100%;
    gap: 1rem;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .tag {
    padding: 0.1rem 0.8rem;
    background: white;
    border-radius:0.3rem;
    margin-right: 0.3rem;
  }
`;
