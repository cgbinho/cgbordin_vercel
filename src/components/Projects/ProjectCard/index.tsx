import React, { useState } from 'react';
import { VideoLink } from '../../VideoLink';
import { ProjectCardContent } from './styles';
import Link from 'next/link';
import { tools } from '../../../data/tags';
import Button from '../../Form/Button';
import { AiOutlineRead, AiFillGithub } from 'react-icons/ai';
import { CgPlayButtonO } from 'react-icons/cg';
import { RiPagesLine } from 'react-icons/ri';
import { ModalPlayer } from '../../ModalPlayer';
import { useRouter } from 'next/router';

type ProjectCardData = {
  content: any;
  project: ProjectData;
};

export type ProjectData = {
  title: string;
  github?: {
    link: string;
  };
  liveDemo?: {
    link: string;
  };
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

  const handleViewCode = () => window.open(project.github.link);

  const handleViewLiveDemo = () => window.open(project.liveDemo.link);

  const handleViewArticle = () =>
    router.push(`${project.article.link}`, `${project.article.link}`, {
      locale: false,
    });

  const handleWatchVideo = () => setOpenModal(!openModal);

  return (
    <ProjectCardContent
      id={`#projects_link_${project.image.alt}`}
      className="box_shadow_soft dark_focus"
      role="listitem"
      whileHover={{ translateY: -4 }}
      transition={{ type: 'tween' }}
    >
      <section>
        <img src={project.image.src} alt={project.image.alt} width="100%" />
        <div className="project_info">
          <h3>{project.title}</h3>
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
      <section className="project_button_group">
        {project?.video && (
          <Button
            width="100%"
            height="40px"
            padding="0 1rem"
            onClick={handleWatchVideo}
          >
            <CgPlayButtonO size={20} />
            <span>{content.cards.watchVideo}</span>
          </Button>
        )}
        {project?.article && (
          <Button
            width="100%"
            height="40px"
            padding="0 1rem"
            onClick={handleViewArticle}
          >
            <AiOutlineRead size={20} />
            <span>{content.cards.readArticle}</span>
          </Button>
        )}
        {project?.liveDemo && (
          <Button
            width="100%"
            height="40px"
            padding="0 1rem"
            onClick={handleViewLiveDemo}
          >
            <RiPagesLine size={20} />
            <span> {content.cards.viewLiveDemo}</span>
          </Button>
        )}
        {project?.github && (
          <Button
            width="100%"
            height="40px"
            padding="0 1rem"
            onClick={handleViewCode}
          >
            <AiFillGithub size={20} />
            <span>{content.cards.viewCode}</span>
          </Button>
        )}
      </section>
      {project?.video && (
        <ModalPlayer
          {...{
            isOpen: openModal,
            setOpen: setOpenModal,
            vidSrc: project.video.src,
          }}
        />
      )}
    </ProjectCardContent>
  );
};
