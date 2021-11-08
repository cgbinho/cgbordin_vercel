import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  padding: 3rem 0;
  margin: 3rem 0;
  width: 100vw;
  color: var(--font-accent);
  background-color: hsl(190, 50%, 95%, 0.7);
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
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    align-items: center;
    justify-items: flex-start;
    align-items: flex-start;
    width: 100%;
    gap: 2rem;
    padding: 2rem;
    border-radius: 4px;
  }

  > h2 {
    text-align: center;
  }

  li {
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
  }

  p {
    margin: 1rem 0;
  }

  strong {
    font-size: 1.2rem;
  }

  img {
    border-radius: 8px;
  }

  @media screen and (max-width: 800px) {
    padding: 1rem;

    .projects_list {
      padding: 0rem;
      gap: 1rem;

      li {
        padding: 1.5rem;
        backdrop-filter: unset;
      }
    }
  }
`;
