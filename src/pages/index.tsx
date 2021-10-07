import Head from 'next/head';
import React from 'react';
import { AboutComponent } from '../components/About';
import Layout from '../components/Layout';
import { ProjectsComponent } from '../components/Projects';
import { WelcomeCard } from '../components/WelcomeCard';
import { ExperienceCard } from '../components/ExperienceCard';
import { Container } from '../styles/home';

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
      <Container id="home">
        <WelcomeCard />
        <ExperienceCard {...{ content: contentExperience }} />
        <ProjectsComponent {...{ content: contentProjects }} />
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
