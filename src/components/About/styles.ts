/* eslint-disable prettier/prettier */
import { motion } from 'framer-motion';
import styled from 'styled-components';

interface IContainerProps {
  scentColor: string;
}

export const AboutCardFooter = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  gap: 1rem;
  margin: 2rem 0;

  a{
    display: flex;
    gap: .5rem;
    align-items: center;
  }
  
`;

export const AboutContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  align-items: center;
  justify-items: center;
  margin: 0 2rem;
  max-width: 850px;
  gap: 2rem;

  h2 {
    text-align: center;
  }

  @media (max-width: 800px) {
    gap: 1rem;
    margin: 0 1rem;
  }
`;

export const AboutCardRightContainer = styled(motion.section) <IContainerProps>`
  display: grid;
  grid-template-columns: 140px 1fr;
  align-items: center;
  justify-content: center;
  justify-items: center;

  
  img {
    margin: 2rem;
  }
  
  aside {
    padding: 2rem;
    background-color: var(--gray-170);
    border-radius: 4px;
    backdrop-filter: blur(20px);
    /* Conditionally */
    border-left: 2px solid ${(props) => props.scentColor};
  }

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;

    aside {
      backdrop-filter: unset;
      border-top: 2px solid ${(props) => props.scentColor};
      border-left: none;
    }
  }
`;

export const AboutCardLeftContainer = styled(motion.section) <IContainerProps>`
  display: grid;
  grid-template-columns: 1fr 140px;
  align-items: center;
  justify-content: center;
  justify-items: center;
  
  aside {
    padding: 2rem;
    background-color: var(--gray-170);
    border-radius: 4px;
    backdrop-filter: blur(20px);
    /* Conditionally */
    border-right: 2px solid ${(props) => props.scentColor};
  }

  img {
    margin: 2rem;
  }

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;

    img {
      margin: 2rem;
      order: 2;
    }

    aside {
      order: 3;
      backdrop-filter: unset;
      border-top: 2px solid ${(props) => props.scentColor};
      border-right: none;
    }
  }
`;
