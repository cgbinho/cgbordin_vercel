import styled from 'styled-components';

export const AboutCardFooter = styled.div`
  text-align: center;
  margin: 2rem 0;
  h3 {
    margin-top: 1rem;
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

export const AboutCardRightContainer = styled.div`
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
  }

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const AboutCardLeftContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 140px;
  justify-content: center;
  justify-items: center;

  aside {
    padding: 2rem;
    background-color: var(--gray-170);
    border-radius: 4px;
    backdrop-filter: blur(20px);
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
    }
  }
`;
