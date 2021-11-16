import React from 'react';
import { BiError } from 'react-icons/bi';
import { ErrorContainer } from './styles';

interface ErrorData {
  message: string;
}

export function ErrorComponent({ message }: ErrorData) {
  return (
    <ErrorContainer>
      <BiError size={22} />
      <p>{message}</p>
    </ErrorContainer>
  );
}
