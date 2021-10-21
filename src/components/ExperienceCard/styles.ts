import styled from 'styled-components';

export const ExperienceCardContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  max-width: 780px;
  margin: 2rem;
  gap: 2rem;

  h3 {
    letter-spacing: 0.1rem;
  }

  section {
    display: grid;
    grid-auto-flow: row;
    padding: 2rem;
    background-color: var(--gray-170);
    backdrop-filter: blur(20px);
    border-radius: 4px;
    overflow: visible;
    margin-bottom: 1rem;
  }

  img {
    margin-top: -3rem;
  }

  @media screen and (max-width: 800px) {
    margin: 1rem;

    section {
      padding: 1.5rem;
      margin-bottom: 1rem;
      backdrop-filter: unset;
    }
  }
`;
