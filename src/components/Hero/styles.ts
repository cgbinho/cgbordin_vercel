import styled from 'styled-components';

export const HeroContainer = styled.div`
  margin: 3rem auto;
  width: 100vw;

  /* background: linear-gradient(180deg, #fff 0%, #d1fff4 100%); */
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
    /* color: white; */
    background-size: auto 12em;
    min-height: 750px;

    section {
      margin-bottom: 2rem;
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
    line-height: 1;
  }
`;

export const HeroContainer1 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  justify-content: center;

  /* background-image: url('/images/hero_bg.svg');
  background-repeat: no-repeat, repeat;
  background-position: center; */

  width: 100vw;
  min-height: 500px;
  margin: 4rem auto;
  /* WelcomeCard */
  /* background: linear-gradient(
    180deg,
    rgba(35, 64, 79, 0.2) 0%,
    rgba(179, 204, 214, 0.2) 100%
  ); */

  h1 {
    text-align: center;
    letter-spacing: 0.15rem;
    line-height: 1.5;
    font-size: 2rem;
  }
`;
