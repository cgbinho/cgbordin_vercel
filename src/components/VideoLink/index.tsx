import React, { useState } from 'react';
import { ModalPlayer } from '../ModalPlayer';

interface VideoLinkProps {
  imgData: imgData;
  vidSrc: string;
}

type imgData = {
  imgSrc: string;
  imgAlt: string;
};

export function VideoLink({ imgData, vidSrc }: VideoLinkProps) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <a
        id={`#projects_link_${imgData.imgAlt}`}
        href={`#projects_link_${imgData.imgAlt}`}
        onClick={() => setOpenModal(!openModal)}
      >
        <img src={imgData.imgSrc} alt={imgData.imgAlt} width="100%" />
      </a>
      <ModalPlayer
        {...{
          isOpen: openModal,
          setOpen: setOpenModal,
          vidSrc,
        }}
      />
    </>
  );
}
