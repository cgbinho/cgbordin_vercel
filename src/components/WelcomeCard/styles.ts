import styled from 'styled-components';

export const WelcomeCardContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  margin-top: 3rem;
  gap: 1rem;
  max-width: 780px;
  padding: 1rem;

  p {
    text-align: center;
  }

  h1 {
    text-align: center;
    letter-spacing: 0.15rem;
    line-height: 1.5;
  }

  @media screen and (max-width: 800px) {
    margin: 1rem 0;

    h1 {
      letter-spacing: 1px;
    }
  }
`;

export const WelcomeCardFooter = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  width: 80%;
  justify-items: center;

  img {
    flex-shrink: 0;
  }

  a {
    display: grid;
    grid-template-columns: 40px 1fr;
    align-items: center;
    gap: 0.1rem;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const HorizontalLine = styled.div`
  height: 3px;
  width: 100%;
  background: var(--scent-450);
  border-radius: 50%;
`;
