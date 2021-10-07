import styled from 'styled-components';

export const ExperienceCardContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  max-width: 780px;
  margin: 3rem 2rem;
  gap: 2rem;

  h3 {
    letter-spacing: 0.1rem;
  }

  section {
    display: grid;
    grid-auto-flow: row;
    padding: 2rem;
    background-color: var(--gray-170);
    border-radius: 4px;
  }

  img {
    margin-top: -3rem;
  }
`;
