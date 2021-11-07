import styled from 'styled-components';

export const CodeSnippetContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: hsl(201, 50%, 26%, 0.8);
  backdrop-filter: blur(4px);
  color: white;

  padding: 1rem 1rem 2rem 2rem;
  border-radius: 8px;
  margin: 1rem 0;
  min-width: 250px;

  img {
    margin-left: auto;
  }
`;
