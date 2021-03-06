import styled from 'styled-components';

export const StyledBurger = styled.button<{ open: boolean }>`
  position: fixed;
  right: 2rem;
  top: 1.5rem;
  width: 2rem;
  height: 2rem;
  padding: 0;
  background: transparent;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  border: none;
  cursor: pointer;
  outline: none;
  z-index: 1;

  &:hover {
    color: var(--scent-600);
  }

  &:focus {
    outline: 3px solid var(--scent-600);
    border-radius: 0.13rem;
  }

  span {
    position: relative;
    width: 2rem;
    height: 0.25rem;
    border-radius: 0.6rem;
    transition: all 0.3s linear;
    transform-origin: 1px;
    background-color: var(--primary);

    &:first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
