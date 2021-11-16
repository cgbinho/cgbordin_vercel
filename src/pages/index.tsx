import Head from 'next/head';
import React from 'react';
import { AboutComponent } from '../components/About';
import { ExperienceCard } from '../components/ExperienceCard';
import { Hero } from '../components/Hero';
import Layout from '../components/Layout';
import { ProjectsComponent } from '../components/Projects';
import { ContactComponent } from '../components/Contact';
import { Container } from '../styles/home';

export default function Home({
  contentProjects,
  contentAbout,
  contentExperience,
  contentContact,
}) {
  return (
    <Layout>
      <Head>
        <title>CGBORDIN - Cleber Galves Bordin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <a href="#" className="anchor" id="home" />
        <Hero />
        <a href="#" className="anchor" id="experience" />
        <ExperienceCard {...{ content: contentExperience }} />
        <a href="#" className="anchor anchor_projects" id="projects" />
        <ProjectsComponent {...{ content: contentProjects }} />
        <a href="#" className="anchor anchor_about" id="about" />
        <AboutComponent {...{ content: contentAbout }} />
        <a href="#" className="anchor anchor_contact" id="contact" />
        <ContactComponent {...{ content: contentContact }} />
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  // get the locale text for the selected language:
  const contentProjects = (await import(`../locales/${locale}/projects.js`))
    .default;
  const contentAbout = (await import(`../locales/${locale}/about.js`)).default;
  const contentExperience = (await import(`../locales/${locale}/experience.js`))
    .default;
  const contentContact = (await import(`../locales/${locale}/contact.js`))
    .default;

  return {
    props: {
      contentProjects,
      contentAbout,
      contentExperience,
      contentContact,
    },
  };
}
