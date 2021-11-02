import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  justify-content: center;

  /* background-repeat: no-repeat, repeat; */
  /* background-position: center; */

  width: 100vw;
  min-height: 500px;
  margin: 4rem auto;
  /* WelcomeCard */
  background: linear-gradient(
    180deg,
    rgba(35, 64, 79, 0.2) 0%,
    rgba(179, 204, 214, 0.2) 100%
  );

  h1 {
    text-align: center;
    letter-spacing: 0.15rem;
    line-height: 1.5;
    font-size: 2rem;
  }
`;
