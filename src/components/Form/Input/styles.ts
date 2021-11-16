import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;

  p {
    margin: 0;
  }
  /* margin-top: 8px; */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;

  padding: 0.9rem;
  width: 100%;
  margin-top: 0.25rem;

  border: 0.13rem solid hsl(191, 50%, 85%);
  border-radius: 0.2rem;

  color: var(--font-accent);
  font-size: 0.9rem;
  background: white;
  transition: border 0.2s;

  input {
    width: 100%;
    border: 0;
    background: transparent;
    font-size: 1rem;
    color: var(--font-accent);

    &::placeholder {
      color: var(--gray-170);
    }
  }

  /*
  IF AN ELEMENT INSIDE THIS ELEMENT (input in this case) GETS FOCUS:
  */
  &:focus-within {
    border: 2px solid var(--scent-550);
  }

  svg {
    flex-shrink: 0;
    margin-right: 0.6em;
  }
`;
