import React from 'react';
import { VideoLink } from '../../VideoLink';
import { ProjectCardContent } from './styles';
import Link from 'next/link';
import { tools } from '../../../data/tags';

type ProjectCardData = {
  content: ProjectData;
};

export type ProjectData = {
  title: string;
  article?: {
    link: string;
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

export const ProjectCard = ({ content }: ProjectCardData) => {
  function getTool(tools: { [key: string]: string }[], toolName: string) {
    return tools.find((tool) => tool.name === toolName);
  }

  const projectTools = content.tools.map((tool) => getTool(tools, tool));

  return (
    <ProjectCardContent
      className="border_scented"
      role="projectitem"
      whileHover={{ translateY: -8 }}
      transition={{ type: 'tween' }}
    >
      {content.video ? (
        <VideoLink
          {...{
            imgData: {
              imgSrc: content.image.src,
              imgAlt: content.image.alt,
            },
            vidSrc: content.video.src,
          }}
        />
      ) : (
        <Link href={content.article.link} locale={false}>
          <a>
            <img src={content.image.src} alt={content.image.alt} width="100%" />
          </a>
        </Link>
      )}
      <aside>
        <strong>{content.title}</strong>
        <p>{content.description}</p>

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
      </aside>
    </ProjectCardContent>
  );
};
