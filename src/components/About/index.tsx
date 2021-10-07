import Image from 'next/image';
import React from 'react';
import {
  AboutCardLeftContainer,
  AboutCardRightContainer,
} from './AboutCard/styles';
import { AboutContainer } from './styles';

export function AboutComponent({ content }) {
  return (
    <AboutContainer>
      <h2 id="about">{content.title}</h2>
      <p>{content.description}</p>
      <AboutCardRightContainer>
        <Image
          src="/images/cgbordin_about_starwars.svg"
          alt="Picture of the author"
          width="64px"
          height="64px"
        />
        <aside>
          <p>{content.experience.paragraph01}</p>
          <p>{content.experience.paragraph02}</p>
        </aside>
      </AboutCardRightContainer>
      <AboutCardLeftContainer>
        <aside>
          <p>{content.experience.paragraph03}</p>
        </aside>
        <Image
          src="/images/cgbordin_about_graduation.svg"
          alt="Picture of the author"
          width="64px"
          height="64px"
        />
      </AboutCardLeftContainer>
      <AboutCardRightContainer>
        <Image
          src="/images/cgbordin_about_motion.svg"
          alt="Picture of the author"
          width="64px"
          height="64px"
        />
        <aside>
          <p>{content.experience.paragraph04}</p>
        </aside>
      </AboutCardRightContainer>
      <AboutCardLeftContainer>
        <aside>
          <p>{content.experience.paragraph05}</p>
          <p>{content.experience.paragraph06}</p>
        </aside>
        <Image
          src="/images/cgbordin_about_javascript.svg"
          alt="Picture of the author"
          width="64px"
          height="64px"
        />
      </AboutCardLeftContainer>
      <AboutCardRightContainer>
        <Image
          src="/images/cgbordin_about_apps.svg"
          alt="Picture of the author"
          width="64px"
          height="64px"
        />
        <aside>
          <p>{content.experience.paragraph07}</p>
        </aside>
      </AboutCardRightContainer>
      <p>{content.contact.title}</p>
      <p>
        Cleber Galves Bordin - <i>cgbordin@gmail.com</i> -
        <a href="https://github.com/cgbinho" target="_blank" rel="noreferrer">
          <i> github.com/cgbinho</i>
        </a>
      </p>
    </AboutContainer>
  );
}
