import styled from 'styled-components';

export const Container = styled.nav`
  display: grid;
  grid-auto-flow: column;
  grid-area: header;
  justify-content: space-between;
  align-items: center;
  grid-gap: 1rem;
  padding: 0 2rem;
  background-color: var(--gray-100);
  height: 80px;

  @media (max-width: 920px) {
    grid-gap: 0.5rem;
    padding: 0 1rem;
  }

  .navbar_desktop {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    list-style: none;
    gap: 2rem;

    li {
      display: grid;
      grid-template-rows: auto;
      justify-items: center;
      align-items: center;
      gap: 0.2rem;
    }

    @media (max-width: 920px) {
      display: none;
    }
  }
`;

export const BurguerContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 4rem;

  @media (min-width: 921px) {
    display: none;
  }
`;

export const SignedContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
