import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Container } from '../../styles/home';
import { VideoPlyr } from '../VideoPlyr';
import {
  ProjectCardContent,
  ProjectsContainer,
  ProjectsContent,
} from './styles';
import { VideoCard } from './VideoCard';
import Image from 'next/image';
import { ModalPlayer } from '../ModalPlayer';
import { VideoLink } from '../VideoLink';
import { motion } from 'framer-motion';

type ProjectCardData = {
  title: string;
  article?: {
    link: string;
  };
  content: {
    description: string;
    tools: string;
  };
  image: {
    src: string;
    alt: string;
  };
  video?: {
    src: string;
  };
};

const ProjectCard = ({
  title,
  article,
  content,
  image,
  video,
}: ProjectCardData) => {
  return (
    <ProjectCardContent
      className="border_scented"
      role="listitem"
      whileHover={{ translateY: -8 }}
      transition={{ type: 'tween' }}
    >
      {video ? (
        <VideoLink
          {...{
            imgData: {
              imgSrc: image.src,
              imgAlt: image.alt,
            },
            vidSrc: video.src,
          }}
        />
      ) : (
        <Link href={article.link} locale={false}>
          <a>
            <img src={image.src} alt={image.alt} width="100%" />
          </a>
        </Link>
      )}
      <aside>
        <strong>{title}</strong>
        <p>{content.description}</p>
        <div className="horizontal_line" />
        <p className="italic">{content.tools}</p>
      </aside>
    </ProjectCardContent>
  );
};

export function ProjectsComponent({ content }) {
  return (
    <ProjectsContainer>
      <ProjectsContent>
        <h2 id="projects">{content.title}</h2>
        <ul className="projects_list" role="list">
          <ProjectCard
            {...{
              title: 'Choco Animato',
              article: { link: '/articles/chocoanimato' },
              content: content.chocoanimato,
              image: {
                src: 'images/articles/chocoanimato/chocoanimato_cover.jpg',
                alt: 'Choco Animato Cover',
              },
            }}
          />
          <ProjectCard
            {...{
              title: 'Aepzera',
              article: { link: '/aepzera' },
              content: content.aepzera,
              image: {
                src: 'images/aepzera/aepzera_cover.jpg',
                alt: 'Aepzera Cover',
              },
            }}
          />
          <ProjectCard
            {...{
              title: 'Bayer',
              video: { src: 'deIBIR3sxcU' },
              content: content.bayer,
              image: {
                src: 'images/projects/bayer_thumbnail.jpg',
                alt: 'Bayer thumbnail',
              },
            }}
          />
          <ProjectCard
            {...{
              title: 'Huawei',
              video: { src: '6UjcFtj92eU' },
              content: content.huawei,
              image: {
                src: 'images/projects/huawei_thumbnail.jpg',
                alt: 'Huawei Thumbnail',
              },
            }}
          />
          <ProjectCard
            {...{
              title: 'Skoland',
              video: { src: 'j4FyLNfmpM4' },
              content: content.skoland,
              image: {
                src: 'images/projects/skoland_thumbnail.jpg',
                alt: 'Skoland thumbnail',
              },
            }}
          />
          <ProjectCard
            {...{
              title: 'Hostfiber',
              video: { src: '-pXMLx54Qk0' },
              content: content.hostfiber,
              image: {
                src: 'images/projects/hostfiber_thumbnail.jpg',
                alt: 'Hostfiber thumbnail',
              },
            }}
          />
        </ul>
      </ProjectsContent>
    </ProjectsContainer>
  );
}
