import styled from 'styled-components';

export const ProjectsContent = styled.div`
  display: grid;
  grid-auto-flow: row;
  margin: 1rem 0;
  gap: 1rem;
  width: 100%;
  max-width: 850px;

  > h2 {
    text-align: center;
  }

  section {
    display: grid;
    grid-auto-flow: row;
    align-items: flex-start;
    justify-items: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    gap: 2rem;
    padding: 2rem;
    background-color: var(--gray-170);
    backdrop-filter: blur(20px);
    border-radius: 4px;
  }

  p {
    margin: 1rem 0;
  }

  img {
    border-radius: 8px;
  }

  .projects_list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    align-items: center;
    justify-items: flex-start;
    align-items: flex-start;
    width: 100%;
    gap: 2rem;
    padding: 2rem;
    border-radius: 4px;
  }

  @media screen and (max-width: 800px) {
    padding: 1rem;

    section {
      padding: 1.5rem;
      backdrop-filter: unset;
    }

    .projects_list {
      padding: 0rem;
      gap: 1rem;
    }
  }
`;
