import { StyledModal, Content } from './styles';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import React from 'react';
import { VideoPlyr } from '../VideoPlyr';

interface IModalProps {
  isOpen: boolean;
  setOpen: Function;
  vidSrc: string;
}

export const ModalPlayer = ({ isOpen, setOpen, vidSrc }: IModalProps) => {
  // beforeClose={setRedirection}
  return (
    <StyledModal
      isOpen={isOpen}
      onBackgroundClick={() => setOpen(!isOpen)}
      onEscapeKeydown={() => setOpen(!isOpen)}
    >
      <Content>
        <a onClick={() => setOpen(!isOpen)}>
          <AiOutlineCloseCircle size={28} />
        </a>
        <VideoPlyr {...{ src: vidSrc }} />
      </Content>
    </StyledModal>
  );
};
