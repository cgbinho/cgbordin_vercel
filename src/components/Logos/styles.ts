import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 920px) {
    gap: 0.6rem;
  }
`;
