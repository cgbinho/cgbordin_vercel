import styled from 'styled-components';

export const StyledMenu = styled.nav<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  top: 5rem;
  right: 0;
  height: 100vh;
  width: 35vw;
  position: fixed;
  background-color: var(--gray-100);
  z-index: 1;
  text-align: center;

  padding: 10rem 0;

  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(105%)')};

  border-radius: 0;

  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
  }

  a {
    font-size: 1.5rem;
    color: var(--primary);
    text-decoration: none;
    margin-bottom: 1.5rem;
    cursor: pointer;
    transition: color 0.3s linear;

    &:hover {
      color: var(--scent-650);
    }
    @media (max-width: 600px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
  /* a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: 600px) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  } */
`;

export const StyledLink = styled.a`
  padding: 0 2rem;
  font-size: 1.5rem;
  color: var(--primary);
  text-decoration: none;
  margin-bottom: 1.5rem;
  cursor: pointer;

  &:hover {
    color: var(--scent-650);
  }
`;
