import styled from 'styled-components';

export const Container = styled.div`
  /* height: 100vh; */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto 2.5rem;
  grid-template-areas:
    'header'
    'main'
    'footer';
`;
