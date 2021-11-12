import styled, { keyframes } from 'styled-components';

interface IContainerProps {
  width: string;
  height: string;
  padding: string;
  primary?: boolean;
}

export const Container = styled.button<IContainerProps>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  margin: 0 auto;
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) =>
    props.primary ? 'white' : `var(--button-secondary-text)`};
  background: ${(props) =>
    props.primary ? `var(--button-primary)` : `var(--button-secondary)`};

  border: none;
  border-radius: 0.2rem;
  transition: background-color 0.2s;

  svg {
    margin: 0.2em;
  }

  &:hover {
    background: ${(props) =>
    props.primary
      ? `var(--button-primary-hover)`
      : `var(--button-secondary-hover)`};
    color: ${(props) =>
    props.primary ? 'white' : `var(--button-secondary-text)`};
  }

  &:active {
    transform: translateY(1px);
    transition: all 0.2s ease 0s;
  }

  &:focus {
    outline: 3px solid var(--gray-100);
    border-radius: 2px;
  }

  &:disabled {
    cursor: default;
    transform: translateY(0px);
    color: var(--dark_gray);
    box-shadow: 0px 0px 0px var(--scent-250);
    border: 2px solid var(--light_gray);
    background: #efefef;
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid var(--secondary);
  border-right: 2px solid var(--secondary);
  border-bottom: 2px solid white;
  border-left: 2px solid white;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export const ButtonWithIcon = styled(Container)`
  svg {
    margin-right: 8px;
  }
`;
