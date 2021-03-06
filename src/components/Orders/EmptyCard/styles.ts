import styled from 'styled-components';

export const EmptyOrderCardContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 950px;
  background-color: var(--gray-170);
  /* backdrop-filter: blur(20px); */
  padding: 2rem;
  border-radius: 0.5rem;

  svg {
    margin: 0 0.25rem;
    fill: var(--error_color);
  }
`;
