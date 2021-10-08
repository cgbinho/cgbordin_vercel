import React from 'react';
import Image from 'next/image';
import {
  AboutContainer,
  AboutCardLeftContainer,
  AboutCardRightContainer,
  AboutCardFooter,
} from './styles';

export function AboutComponent({ content }) {
  return (
    <AboutContainer>
      <h2 id="about">{content.title}</h2>
      <p>{content.description}</p>
      <AboutCardRightContainer>
        <img
          src="/images/cgbordin_about_starwars.svg"
          alt="Picture of the author"
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
        <img
          src="/images/cgbordin_about_graduation.svg"
          alt="Picture of the author"
        />
      </AboutCardLeftContainer>
      <AboutCardRightContainer>
        <img
          src="/images/cgbordin_about_motion.svg"
          alt="Picture of the author"
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
        <img
          src="/images/cgbordin_about_javascript.svg"
          alt="Picture of the author"
        />
      </AboutCardLeftContainer>
      <AboutCardRightContainer>
        <img
          src="/images/cgbordin_about_apps.svg"
          alt="Picture of the author"
        />
        <aside>
          <p>{content.experience.paragraph07}</p>
        </aside>
      </AboutCardRightContainer>
      <AboutCardFooter>
        <p>{content.contact.title}</p>
        <h3>cgbordin @ gmail.com</h3>
      </AboutCardFooter>
    </AboutContainer>
  );
}
