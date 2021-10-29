import styled from 'styled-components';

export const Container = styled.div`
  /* height: 100vh; */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  grid-template-areas:
    'main'
    'footer';
`;

export const Content = styled.main`
  grid-area: main;
  overflow: auto;

  background-image: url('images/background-annie-spratt-sE6lmWCsf_Q-unsplash.png');
  background-repeat: repeat-x;
  background-attachment: fixed;

  /* background-color: var(--gray-200); */
  /* background-color: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c); */
`;
