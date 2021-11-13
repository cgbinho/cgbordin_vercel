import styled, { css, keyframes } from 'styled-components';
import Modal from 'styled-react-modal';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow:0.3rem0.3rem 10px rgba(0, 0, 0, 0.08);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem;
  width: 100%;
  max-width: 950px;
  animation: 0.4s ${fadeIn} ease-out;
  background-color: var(--gray-50);

  a {
    cursor: pointer;
    text-align: right;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 950px) {
    border-radius: 0;
    padding: 2rem 0;
    /* background-color: var(--gray-600); */
    a {
      margin-right: 1rem;
    }
  }
`;

export const SpecialModalBackground = styled.div`
  display: grid;
  place-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 30;
  background-color: hsl(200, 50%, 8%, 0.8);
  backdrop-filter: blur(4px);

  @media screen and (max-width: 950px) {
    backdrop-filter: none;
  }
`;
