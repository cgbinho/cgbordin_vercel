import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  margin: 0rem auto;
  width: 100vw;
  min-height: 450px;
  margin-bottom: 2rem;

  /* Background image and gradient */
  background-image: url('/images/hero_bg_v03.svg'),
    linear-gradient(
      to bottom,
      hsl(100, 100%, 100%) 50%,
      hsl(190, 40%, 80%, 0.9) 100%
    );
  background-repeat: no-repeat, no-repeat;
  background-position: center bottom, center;
  background-size: auto 9em, cover;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  margin: 5rem auto;
  align-items: center;
  align-content: flex-end;
  justify-content: center;
  color: var(--font-accent);

  h1 {
    font-size: 2rem;
    line-height: 2.2rem;
    letter-spacing: 0.15rem;
  }

  p {
    margin-bottom: 0.5rem;
    line-height: 1.25;
  }

  .hero_text {
    flex-basis: 30rem;
    margin: 0 1rem;

    span {
      display: inline-flex;
    }
  }

  .rive {
    flex-basis: 20rem;
    max-width: 450px;
    z-index: 0;
  }

  .social_networks {
    justify-content: left;
  }

  @media (max-width: 840px) {
    /* margin-top: 2rem; */
    margin: 1rem auto;
    gap: 1rem;
    text-align: center;
    background-size: auto 12em;
    height: 42rem;
    align-content: flex-end;

    .social_networks {
      justify-content: center;
    }

    h1,
    p {
      text-align: center;
    }

    section {
      margin-bottom: 0rem;
    }
  }
`;
