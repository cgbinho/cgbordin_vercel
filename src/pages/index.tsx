import Head from 'next/head';
import React from 'react';
import { AboutComponent } from '../components/About';
import Layout from '../components/Layout';
import { ProjectsComponent } from '../components/Projects';
import { WelcomeCard } from '../components/WelcomeCard';
import { ExperienceCard } from '../components/ExperienceCard';
import { Container } from '../styles/home';
import { BirdAnimation } from '../components/BirdAnimation';
import { Hero } from '../components/Hero';

export default function Home({
  contentProjects,
  contentAbout,
  contentExperience,
}) {
  return (
    <Layout>
      <Head>
        <title>CGBORDIN - Cleber Galves Bordin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <a className="anchor" id="home" />
        <Hero />
        {/* <WelcomeCard /> */}
        <a className="anchor" id="experience" />
        <ExperienceCard {...{ content: contentExperience }} />
        <a className="anchor anchor_projects" id="projects" />
        <ProjectsComponent {...{ content: contentProjects }} />
        <a className="anchor anchor_about" id="about" />
        <AboutComponent {...{ content: contentAbout }} />
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

  return {
    props: {
      contentProjects,
      contentAbout,
      contentExperience,
    },
  };
}
