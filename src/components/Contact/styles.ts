import styled from 'styled-components';

export const ContactContainer = styled.div`
  padding: 3rem 0;
  width: 100vw;
  color: var(--font-accent);
  background-image: linear-gradient(
    to bottom,
    hsl(100, 100%, 100%) 0%,
    hsl(190, 60%, 94%, 0.9) 75%
  );
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 1rem;
  width: 90%;
  max-width: 450px;

  h2 {
    text-align: center;
    line-height: 4rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
`;

export const ContactFooter = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  gap: 1rem;
  margin: 2rem 0;

  a {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`;
