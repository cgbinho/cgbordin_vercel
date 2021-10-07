import styled from 'styled-components';

export const WelcomeCardContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  margin: 3rem 2rem;
  gap: 1rem;
  max-width: 780px;

  h1 {
    letter-spacing: 0.15rem;
  }
`;

export const WelcomeCardFooter = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  width: 80%;

  img {
    flex-shrink: 0;
  }

  a {
    display: grid;
    grid-template-columns: 40px 1fr;
    align-items: center;
    gap: 0.1rem;
  }
`;

export const HorizontalLine = styled.div`
  height: 3px;
  width: 100%;
  background: var(--scent-450);
  border-radius: 50%;
`;
