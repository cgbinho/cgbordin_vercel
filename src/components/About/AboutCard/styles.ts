import styled from 'styled-components';

export const AboutCardRightContainer = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 1rem;
  align-items: center;

  aside {
    padding: 2rem;
    background-color: var(--gray-170);
    border-radius: 4px;
  }
`;

export const AboutCardLeftContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 140px;
  gap: 1rem;
  align-items: center;

  aside {
    padding: 2rem;
    background-color: var(--gray-170);
    border-radius: 4px;
  }
`;
