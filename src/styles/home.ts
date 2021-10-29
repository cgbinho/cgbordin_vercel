import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-content: center;
  justify-items: center;
  align-items: flex-start;
  padding-top: 2rem;
  overflow: hidden;

  .content {
    display: grid;
    grid-auto-flow: row;
    justify-items: center;
    align-items: center;
    gap: 3rem;
    padding: 2rem 0;
    margin: 0 1rem;
    /* max-width: 950px; */
  }

  hr {
    border: 0;
    height: 1px;
    background: var(--gray-400);
  }
`;
