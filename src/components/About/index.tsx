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
      <Image
        src="/images/cgbordin_profile_02.jpg"
        alt="Cleber Galves Bordin"
        width="180px"
        height="180px"
        className="border_radius_50"
        layout="fixed"
      />
      <p>{content.description}</p>
      <AboutCardRightContainer>
        <img src="/images/cgbordin_about_starwars.svg" alt="Starwars" />
        <aside>
          <p>{content.experience.paragraph01}</p>
          <p>{content.experience.paragraph02}</p>
        </aside>
      </AboutCardRightContainer>
      <AboutCardLeftContainer>
        <aside>
          <p>{content.experience.paragraph03}</p>
        </aside>
        <img src="/images/cgbordin_about_graduation.svg" alt="Graduation" />
      </AboutCardLeftContainer>
      <AboutCardRightContainer>
        <img src="/images/cgbordin_about_motion.svg" alt="Motion" />
        <aside>
          <p>{content.experience.paragraph04}</p>
        </aside>
      </AboutCardRightContainer>
      <AboutCardLeftContainer>
        <aside>
          <p>{content.experience.paragraph05}</p>
          <p>{content.experience.paragraph06}</p>
        </aside>
        <img src="/images/cgbordin_about_javascript.svg" alt="Javascript" />
      </AboutCardLeftContainer>
      <AboutCardRightContainer>
        <img src="/images/cgbordin_about_apps.svg" alt="Apps" />
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
