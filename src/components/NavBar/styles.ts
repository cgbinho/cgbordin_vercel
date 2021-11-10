import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.header`
  display: grid;
  grid-auto-flow: column;
  /* grid-area: header; */
  justify-content: space-between;
  align-items: center;
  grid-gap: 1rem;
  padding: 0 2rem;
  background-color: var(--gray-100);
  height: 80px;
  width: 100%;
  position: fixed;
  z-index: 10;

  @media (max-width: 920px) {
    grid-gap: 0.5rem;
    padding: 0 1rem;
  }

  .navbar {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    list-style: none;
    gap: 2rem;

    li {
      display: grid;
      grid-auto-flow: column;
      justify-items: center;
      justify-content: start;
      align-items: center;
      align-content: center;
      gap: 0.5rem;
    }

    @media (max-width: 920px) {
      gap: 4rem;
    }

    .navbar_desktop {
      @media (max-width: 920px) {
        display: none;
      }
    }
    .navbar_mobile {
      @media (min-width: 921px) {
        display: none;
      }
    }
  }
`;

export const BurguerContainer = styled(motion.li)`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 4rem;
`;
