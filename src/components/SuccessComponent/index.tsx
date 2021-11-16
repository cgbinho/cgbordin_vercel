import React from 'react';
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import { SuccessContainer } from './styles';

interface SuccessData {
  message: string;
}

export function SuccessComponent({ message }: SuccessData) {
  return (
    <SuccessContainer>
      <MdOutlineMarkEmailRead size={22} />
      <p>{message}</p>
    </SuccessContainer>
  );
}
