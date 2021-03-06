import styled from 'styled-components';

export const SuccessCardContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  gap: 0.1rem;
  width: 100%;
  max-width: 950px;
  background-color: var(--gray-170);
  /* backdrop-filter: blur(20px); */
  padding: 2rem;
  border-radius: 0.5rem;

  h2 {
    line-height: 2rem;
  }

  svg {
    margin-bottom: 1rem;
    fill: var(--success_color);
  }
`;
