import { getAllArticles } from '../../helpers/articles/api_articles';
import Link from 'next/link';
import DateFormatter from '../../components/DateFormatter';
import React from 'react';
import Layout from '../../components/Layout';
import Head from 'next/head';

import { ArticlesContent } from '../../styles/articles';
import { ArticleCard } from '../../components/Articles/ArticleCard/ArticleCard';

export default function Articles({ allArticles, content }) {
  return (
    <Layout>
      <Head>
        <title>CGBORDIN.com - {content.title}</title>
      </Head>
      <ArticlesContent>
        <h1>{content.title}</h1>
        <div className="article_list">
          {allArticles.map(
            ({ slug, date, title, excerpt, coverImage }, index: number) => (
              <ArticleCard
                key={index}
                content={{ slug, date, title, excerpt, coverImage }}
              />
            )
          )}
        </div>
      </ArticlesContent>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const allArticles = getAllArticles([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);
  const content = (await import(`../../locales/${locale}/articles.js`)).default;

  return {
    props: { allArticles, content },
  };
}
