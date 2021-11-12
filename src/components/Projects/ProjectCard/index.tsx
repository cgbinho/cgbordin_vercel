import React, { useState } from 'react';
import { VideoLink } from '../../VideoLink';
import { ProjectCardContent } from './styles';
import Link from 'next/link';
import { tools } from '../../../data/tags';
import Button from '../../Form/Button';
import { MdOpenInNew } from 'react-icons/md';
import { ModalPlayer } from '../../ModalPlayer';
import { useRouter } from 'next/router';

type ProjectCardData = {
  content: any;
  project: ProjectData;
};

export type ProjectData = {
  title: string;
  article?: {
    link: string;
    isExternal: boolean;
  };
  description: string;
  tools: string[];
  image: {
    src: string;
    alt: string;
  };
  video?: {
    src: string;
  };
};

export const ProjectCard = ({ content, project }: ProjectCardData) => {
  const router = useRouter();

  const [openModal, setOpenModal] = useState(false);

  function getTool(tools: { [key: string]: string }[], toolName: string) {
    return tools.find((tool) => tool.name === toolName);
  }

  const projectTools = project.tools.map((tool) => getTool(tools, tool));

  // TO DO: handle click de um link de vídeo, página ou página externa.
  const handleClick = () => {
    // video:
    if (project?.video) {
      return setOpenModal(!openModal);
    }
    // página externa:
    if (project?.article?.isExternal) {
      return window.open(project.article.link);
    }
    // página:
    return router.push(`${project.article.link}`, `${project.article.link}`, {
      locale: false,
    });
  };

  return (
    <ProjectCardContent
      id={`#projects_link_${project.image.alt}`}
      className="border_scented_dark dark_focus"
      role="listitem"
      whileHover={{ translateY: -4 }}
      transition={{ type: 'tween' }}
    >
      <section>
        <img src={project.image.src} alt={project.image.alt} width="100%" />
        <div className="project_info">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          {projectTools.map((tool) => (
            <span
              className="tag"
              style={{
                background: `${tool.bgColor}`,
                color: `${tool.textColor}`,
                display: 'inline-block',
                marginBottom: '.3rem',
              }}
              key={tool.name}
            >
              {tool.name}
            </span>
          ))}
        </div>
      </section>
      <Button primary width="90%" height="40px" onClick={handleClick}>
        <MdOpenInNew size={20} />
        {content.cards.viewProject}
      </Button>
      {content?.video && (
        <ModalPlayer
          {...{
            isOpen: openModal,
            setOpen: setOpenModal,
            vidSrc: content.video.src,
          }}
        />
      )}
    </ProjectCardContent>
  );
};
