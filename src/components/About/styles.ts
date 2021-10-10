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
  display: flex;
  flex-direction: row;
  align-items: center;
  /* gap: 2rem; */

  img {
    flex: 1;
    margin: 2rem;
  }

  aside {
    padding: 2rem;
    background-color: var(--gray-170);
    border-radius: 4px;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export const AboutCardLeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* gap: 2rem; */
  align-items: center;

  aside {
    padding: 2rem;
    background-color: var(--gray-170);
    border-radius: 4px;
  }

  img {
    flex: 1;
    margin: 2rem;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;

    img {
      margin: 2rem;
      order: 2;
    }

    aside {
      order: 3;
    }
  }
`;
