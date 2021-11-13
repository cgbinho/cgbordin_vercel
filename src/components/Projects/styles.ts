import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  padding: 3rem 0;
  margin: 3rem 0;
  width: 100vw;
  color: var(--font-accent);
  background-image: linear-gradient(
    to bottom,
    hsl(100, 100%, 100%) 0%,
    hsl(190, 60%, 94%, 0.9) 60%
  );
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const ProjectsContent = styled.div`
  display: grid;
  grid-auto-flow: row;
  margin: 0 auto;
  gap: 1rem;
  width: 100%;
  max-width: 850px;

  .projects_list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    align-items: center;
    justify-items: flex-start;
    align-items: flex-start;
    width: 100%;
    gap: 2rem;
    padding: 2rem;
    border-radius:0.3rem;
  }

  > h2 {
    text-align: center;
  }

  @media screen and (max-width: 800px) {
    padding: 1rem;

    .projects_list {
      padding: 0rem;
      gap: 1rem;
    }
  }
`;
