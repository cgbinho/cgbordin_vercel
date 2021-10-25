import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Container } from '../../styles/home';
import { VideoPlyr } from '../VideoPlyr';
import { ProjectsContent } from './styles';
import { VideoCard } from './VideoCard';
import Image from 'next/image';
import { ModalPlayer } from '../ModalPlayer';
import { VideoLink } from '../VideoLink';

export function ProjectsComponent({ content }) {
  return (
    <ProjectsContent>
      <h2 id="projects">{content.title}</h2>
      <ul className="projects_list" role="list">
        <li role="listitem">
          <Link href={`/articles/chocoanimato`} locale={false}>
            <a>
              <img
                src="images/articles/chocoanimato/chocoanimato_cover.jpg"
                alt="Choco Animato Cover"
                width="100%"
              />
            </a>
          </Link>
          <aside>
            <strong>Choco Animato</strong>
            <p>{content.chocoanimato.description}</p>
            <p>{content.chocoanimato.tools}</p>
          </aside>
        </li>
        <li role="listitem">
          <Link href={`/aepzera`} locale={false}>
            <a>
              <img
                src="images/aepzera/aepzera_cover.jpg"
                alt={'Aepzera Cover'}
                width="100%"
              />
            </a>
          </Link>
          <aside>
            <strong>Aepzera</strong>
            <p>{content.aepzera.description}</p>
            <p>{content.aepzera.tools}</p>
          </aside>
        </li>
        <li role="listitem">
          <VideoLink
            {...{
              imgData: {
                imgSrc: 'images/projects/bayer_thumbnail.jpg',
                imgAlt: 'Bayer thumbnail',
              },
              vidSrc: 'deIBIR3sxcU',
            }}
          />
          <aside>
            <strong>Bayer</strong>
            <p>{content.bayer.description}</p>
            <p>{content.bayer.tools}</p>
          </aside>
        </li>
        <li>
          <VideoLink
            {...{
              imgData: {
                imgSrc: 'images/projects/huawei_thumbnail.jpg',
                imgAlt: 'Huawei Thumbnail',
              },
              vidSrc: '6UjcFtj92eU',
            }}
          />
          <aside>
            <strong>Huawei</strong>
            <p>{content.huawei.description}</p>
            <p>{content.huawei.tools}</p>
          </aside>
        </li>
        <li>
          <VideoLink
            {...{
              imgData: {
                imgSrc: 'images/projects/skoland_thumbnail.jpg',
                imgAlt: 'Skoland thumbnail',
              },
              vidSrc: 'j4FyLNfmpM4',
            }}
          />
          <aside>
            <strong>Skoland</strong>
            <p>{content.skoland.description}</p>
            <p>{content.skoland.tools}</p>
          </aside>
        </li>
        <li>
          <VideoLink
            {...{
              imgData: {
                imgSrc: 'images/projects/hostfiber_thumbnail.jpg',
                imgAlt: 'Hostfiber thumbnail',
              },
              vidSrc: '-pXMLx54Qk0',
            }}
          />
          <aside>
            <strong>Hostfiber</strong>
            <p>{content.hostfiber.description}</p>
            <p>{content.hostfiber.tools}</p>
          </aside>
        </li>
      </ul>
    </ProjectsContent>
  );
}
