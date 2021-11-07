import styled from 'styled-components';

export const HeroContainer = styled.div`
  margin: 3rem auto;
  width: 100vw;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  align-items: center;
  align-content: flex-end;
  justify-content: center;
  gap: 1rem;
  min-height: 500px;
  color: var(--font-accent);
  margin: 0 auto;
  background: url('/images/hero_bg_v03.svg') no-repeat center bottom;
  background-size: auto 12em;

  @media (max-width: 755px) {
    gap: 1rem;
    margin-top: -70px;
    text-align: center;
    background-size: auto 12em;
    min-height: 680px;

    section {
      margin-bottom: 0rem;
    }
  }

  section .rive {
    display: flex;
    flex-direction: row;
    align-content: center;
    padding: 0;
  }

  section {
    padding: 0 1em;
    z-index: 1;
  }

  h1 {
    text-align: center;
    letter-spacing: 0.15rem;
    font-size: 2rem;
  }

  p {
    line-height: 1.25;
  }
`;
