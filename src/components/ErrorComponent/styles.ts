import styled from 'styled-components';

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: hsl(350, 110%, 30%, 1);
  padding: 0.6rem;
  border-radius: 0.2rem;
  background: hsl(350, 110%, 65%, 0.2);

  p {
    margin: 0;
    margin-left: 0.5rem;
  }
`;
